const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

const session = require("express-session");
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
  max: 10,
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

app.get("/api/clubs", async (req, res) => {
  try {
    const clubs = await db("Club").select("*");
    res.json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
});

// Retrieve all the members in a certain club by clubId
app.get("/api/clubs/:clubId/members", async (req, res) => {
  const { clubId } = req.params;

  try {
    const clubMembers = await db("Club")
      .where("Club.clubId", clubId)
      .join("Membership", "Club.clubId", "=", "Membership.clubId")
      .join("User", "Membership.userId", "=", "User.userId")
      .select("Club.clubId", "name", "User.userId", "firstName", "lastName");

    if (clubMembers.length === 0) {
      return res.status(404).json({ error: "No members" });
    }

    res.json(clubMembers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch club" });
  }
});

// Retrieve the member count of a certain club by clubId
app.get("/api/membership/:clubId", async (req, res) => {
  const { clubId } = req.params;

  try {
    const memberCount = await db("Membership")
      .where("clubId", clubId)
      .count("userId as count")
      .first();

    res.json(Number(memberCount.count));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch club" });
  }
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
    res.clearCookie("sid"); // match the cookie name you set in session config
    res.json({ ok: true });
  });
});

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const existing = await db("User").where({ email }).first();
    if (existing) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const [userId] = await db("User").insert({
      firstName,
      lastName,
      email,
      passwordHash,
    });

    req.session.regenerate((err) => {
      if (err) return res.status(500).json({ error: "Login failed" });
      req.session.userId = userId;

      res.status(201).json({ userId, firstName, lastName, email });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

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
      if (err) return res.status(500).json({ error: "Login failed" });

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
    res.status(500).json({ error: "Login failed" });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
