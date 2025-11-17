import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(process.cwd(), "public")));

// Load the JSON file
const dataPath = path.join(process.cwd(), "bible/kjv_fixed.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const verses = data.verses;

// Random verse route
app.get("/random-verse", (req, res) => {
  const randomIndex = Math.floor(Math.random() * verses.length);
  const randomVerse = verses[randomIndex];
  res.json(randomVerse);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

