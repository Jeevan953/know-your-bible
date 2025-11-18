import React, { useState } from "react";
import verses from "../data/verse.json"; // Make sure this file exists

function RandomVerse() {
  const [verse, setVerse] = useState(
    verses[Math.floor(Math.random() * verses.length)]
  );

  const handleNextVerse = () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    setVerse(randomVerse);
  };

  return (
    <div className="verse-wrapper">
  {verse && (
    <>
      <p className="verse">📖 {verse.text} – {verse.reference}</p>
      <button className="verse-button" onClick={handleNextVerse}>
        New Verse
      </button>
    </>
  )}
</div>
  );
}

export default RandomVerse;






