const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = "./db.json";

// Load DB
function loadDB() {
  if (!fs.existsSync(DB_FILE)) return { results: [] };
  return JSON.parse(fs.readFileSync(DB_FILE));
}

// Save DB
function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// GET all results
app.get("/results", (req, res) => {
  res.json(loadDB().results);
});

// ADD result
app.post("/results", (req, res) => {
  const db = loadDB();
  db.results.push(req.body);
  saveDB(db);
  res.json({ message: "Saved" });
});

// DELETE result
app.delete("/results", (req, res) => {
  const { index } = req.body;
  const db = loadDB();
  db.results.splice(index, 1);
  saveDB(db);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("School server running on port 3000");
});