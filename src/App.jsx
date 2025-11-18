import RandomVerse from "./components/RandomVerse";
import MusicPlayer from "./components/MusicPlayer";
import ConfettiButton from "./components/ConfettiButton";

function App() {
  return (
    <div>
      <h1>📖 Know Your Bible</h1>
      <RandomVerse />      {/* This renders the verse and button */}
      <MusicPlayer />
      <ConfettiButton />
    </div>
  );
}

export default App;









