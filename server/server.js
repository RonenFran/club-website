const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api/Club", async (req, res) => {
  try {
    clubs = await db("Club").select("*");
    res.json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
});

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

app.get("/api/clubs/:name/membercount", async (req, res) => {
  const { name } = req.params;

  try {
    const memberCount = await db("Club")
      .leftJoin("Membership", "Club.clubId", "Membership.clubId")
      .where("Club.name", name)
      .groupBy("Club.clubId")
      .count("Membership.userId as count")
      .first();

    if (!memberCount) {
      return res.status(404).json({ error: "No such club exists" });
    }

    res.json(Number(memberCount.count));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch club" });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
