import { useState } from 'react'
import './App.css'

function App() {
  const verses = [
    {
      text: "For God so loved the world that He gave His one and only Son.",
      reference: "John 3:16"
    },
    {
      text: "Love is patient and kind; love does not envy or boast; it is not arrogant or rude.",
      reference: "1 Corinthians 13:4-5"
    },
    {
      text: "The Lord is my shepherd; I shall not want.",
      reference: "Psalm 23:1"
    },
    {
      text: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13"
    },
    {
      text: "Trust in the Lord with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5"
    }
  ];

  const gradients = [
    "linear-gradient(135deg, #f5af19, #f12711)",
    "linear-gradient(135deg, #36d1dc, #5b86e5)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #43cea2, #185a9d)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
  ];

  const [verse, setVerse] = useState(
    verses[Math.floor(Math.random() * verses.length)]
  );

  const [bg, setBg] = useState(
    gradients[Math.floor(Math.random() * gradients.length)]
  );

  const getNewVerse = () => {
    setVerse(verses[Math.floor(Math.random() * verses.length)]);
    setBg(gradients[Math.floor(Math.random() * gradients.length)]);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '80px',
        fontFamily: 'serif',
        minHeight: '100vh',
        padding: '20px',
        color: '#fff',
        background: bg,
        transition: 'background 1s ease'
      }}
    >
      <h1>📖 Know Your Bible – Daily Verse</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '20px auto' }}>
        {verse.text}
      </p>
      <h3>— {verse.reference}</h3>
      <p
        onClick={getNewVerse}
        style={{
          cursor: 'pointer',
          fontStyle: 'italic',
          marginTop: '30px'
        }}
      >
        ✨ Refresh for a new verse ✨
      </p>
    </div>
  );
}

export default App;

