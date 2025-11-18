import React, { useState } from "react";
import verses from "../data/verses.json"; // Make sure this file exists

function RandomVerse() {
  const [verse, setVerse] = useState(
    verses[Math.floor(Math.random() * verses.length)]
  );

  const handleNextVerse = () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    setVerse(randomVerse);
  };

  return (
    <div className="random-verse">
      <p>📖 {verse.text} – {verse.reference}</p>
      <button onClick={handleNextVerse}>Next Verse</button>
    </div>
  );
}

export default RandomVerse;



