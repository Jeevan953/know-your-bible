import RandomVerse from "./components/RandomVerse";
import MusicPlayer from "./components/MusicPlayer";
import ConfettiButton from "./components/ConfettiButton";
import "./App.css";

function App() {
  return (
      <div className="app-container">

 <h1 className="app-title">📖 Know Your Bible</h1>

  <div className="section">
    <RandomVerse />
  </div>

  <div className="section">
    <MusicPlayer />
  </div>

  <ConfettiButton />
</div>

  );
}

export default App;









