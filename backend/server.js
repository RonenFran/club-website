const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

const session = require("express-session");
const { body, matchedData, validationResult } = require("express-validator");
const MySQLStore = require("express-mysql-session")(session);
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const rateLimit = require("express-rate-limit");
const SALT_ROUNDS = 10;
require("dotenv").config();
if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not set");
}

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts, try again later." },
});

app.use(cors(corsOptions));
app.use(express.json());

const pool = mysql.createPool(db.client.config.connection);
const sessionStore = new MySQLStore(
  {
    schema: {
      tableName: "sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  pool
);

app.use(
  session({
    name: "sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

// Retrieve the member count of a certain club by clubId
app.get("/api/clubs/:clubId/membercount", async (req, res) => {
  const { clubId } = req.params;

  try {
    const memberCount = await db("Membership")
      .where("clubId", clubId)
      .where("status", "joined")
      .count("userId as count")
      .first();

    res.json(Number(memberCount.count));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch club" });
  }
});

// Get all the members of a certain club
app.get("/api/clubs/:clubName/members", async (req, res) => {
  const { clubName } = req.params;

  try {
    const clubMembers = await db("Club")
      .join("Role", "Club.clubId", "=", "Role.clubId")
      .join("Membership", function () {
        this.on("Club.clubId", "=", "Membership.clubId").andOn(
          "Role.roleId",
          "=",
          "Membership.roleId"
        );
      })
      .join("User", "Membership.userId", "=", "User.userId")
      .select("User.firstName", "User.lastName", "Role.roleName", "Role.isLeadership")
      .where("Club.name", clubName)
      .where("Membership.status", "joined");

    res.json(clubMembers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch club members" });
  }
});

// Get all public announcements for specified club
app.get("/api/clubs/:clubName/announcements", async (req, res) => {
  const { clubName } = req.params;

  try {
    const clubAnnouncements = await db("Club")
      .join("Announcement", "Club.clubId", "=", "Announcement.clubId")
      .where("Club.clubName", clubName);

    res.json(clubAnnouncements);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch club announcements" });
  }
});

// Getting a club tuple based on club name
app.get("/api/clubs/:clubName", async (req, res) => {
  const { clubName } = req.params;

  try {
    const clubInfo = await db("Club").select("*").where("Club.name", clubName);

    res.json(clubInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch club information" });
  }
});

// Retrieve all the clubs in the system
app.get("/api/clubs", async (req, res) => {
  try {
    const clubs = await db("Club").select("*");
    res.json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
});

// PATCH /api/clubs/:clubId/announcements/:announcementId/pin
router.patch("/api/clubs/:clubId/announcements/:announcementId/pin", async (req, res) => {
  const { clubId, announcementId } = req.params;

  await knex("Announcement").where({ clubId }).update({ isPinned: false });
  await knex("Announcement").where({ announcementId }).update({ isPinned: true });

  res.sendStatus(200);
});

app.get("/api/auth/me", async (req, res) => {
  try {
    if (!req.session.userId) return res.json(null);

    const user = await db("User")
      .where({ userId: req.session.userId })
      .first()
      .select("userId", "firstName", "lastName", "email", "displayName");

    res.json(user ?? null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "logout failed" });
    res.clearCookie("sid");
    res.json({ ok: true });
  });
});

app.post(
  "/api/auth/sign-up",
  body("firstName")
    .trim()
    .matches(/^[\p{L}\p{M}\p{Zs}'-]+$/u)
    .withMessage("Names can include letters, spaces, dashes, and apostrophes")
    .notEmpty()
    .withMessage("Names cannot be empty")
    .escape(),
  body("lastName")
    .trim()
    .matches(/^[\p{L}\p{M}\p{Zs}'-]+$/u)
    .withMessage("Names can include letters, spaces, dashes, and apostrophes")
    .notEmpty()
    .withMessage("Names cannot be empty")
    .escape(),
  body("email").trim().isEmail().withMessage("Emails must be valid email format").normalizeEmail(),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Passwords must be minimum 8 characters")
    .escape(),
  body("passwordRe")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Passwords must be minimum 8 characters")
    .escape(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const formData = matchedData(req);
      const existing = await db("User").where({ email: formData.email }).first();
      if (existing) {
        return res.status(409).json({ error: "Email already in use", path: "email" });
      }

      if (formData.password != formData.passwordRe) {
        return res.status(409).json({ error: "Passwords do not match", path: "passwordRe" });
      }
      const passwordHash = await bcrypt.hash(formData.password, SALT_ROUNDS);

      const [userId] = await db("User").insert({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        passwordHash,
      });

      req.session.regenerate((err) => {
        if (err) return res.status(500).json({ error: "Sign in failed", path: "passwordRe" });
        req.session.userId = userId;

        res.status(201).json({
          userId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Sign up failed" });
    }
  }
);

app.post("/api/auth/login", loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const user = await db("User").where({ email }).first();
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.regenerate((err) => {
      if (err) return res.status(500).json({ error: "Sign in failed" });

      req.session.userId = user.userId;

      res.json({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Sign in failed" });
  }
});

// Get the user's clubs
app.get("/api/user/:userId/clubs", async (req, res) => {
  const { userId } = req.params;

  try {
    const clubs = await db("Membership")
      .select(
        "Club.name",
        "Club.iconPath",
        "Club.clubId",
        "Membership.favorite",
        "Membership.userId",
        "Role.roleName"
      )
      .where("Membership.userId", userId)
      .join("Role", "Membership.roleId", "=", "Role.roleId")
      .join("Club", "Membership.clubId", "=", "Club.clubId");

    res.json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch clubs " });
  }
});

// Set specified club as a favorited club for the user
app.post("/api/user/:userId/:clubId/favorite", async (req, res) => {
  const { userId, clubId } = req.params;

  try {
    await db("Membership")
      .where({ userId, clubId })
      .update({ favorite: db.raw("NOT favorite") });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update favorite " });
  }
});

// Remove user from specified club
app.post("/api/user/:userId/:clubId/leave", async (req, res) => {
  const { userId, clubId } = req.params;

  try {
    await db("Membership").where({ userId, clubId }).delete();

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to leave club" });
  }
});

// // Retrieve the users new notifications from all chats
// app.get("/api/chats/messages/:userId", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const messages = await db("TextChat")
//       .join("ChatMessage", function () {
//         this.on("TextChat.userId", "=", "ChatMessage.userId").andOn(
//           "TextChat.chatId",
//           "=",
//           "ChatMessage.chatId"
//         );
//       })
//       .where("TextChat.userId", userId)
//       .whereRaw("ChatMessage.posted > TextChat.lastView");

//     res.json(messages);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch messages " });
//   }
// });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
