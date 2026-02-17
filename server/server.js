const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

// app.get("/api/Club", async (req, res) => {
//   try {
//     clubs = await db("Club").select("*");
//     res.json(clubs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch clubs" });
//   }
// });

app.get("/api/Club/:clubid", async(req, res));

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
