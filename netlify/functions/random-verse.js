import fs from "fs";
import path from "path";

export const handler = async () => {
  try {
    const filePath = path.join(process.cwd(), "bible/kjv_fixed.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const verses = data.verses;

    const randomIndex = Math.floor(Math.random() * verses.length);
    const verse = verses[randomIndex];

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(verse),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error loading verse.",
    };
  }
};

