import React, { useRef, useState } from "react";

const MusicPlayer = () => {
  const songs = [
    "music/hindi/Yeh Tera Husn.mp3",
    "music/hindi/Kana_Oorin_Kalyanathil.mp3",
    "music/hindi/Sakhaya_Maname.mp3",
    "music/tamil/Yeasu_Rajanae.mp3",
    "music/tamil/Ullathin_Magizhchi.mp3",
    "music/tamil/Ummai_Allamal.mp3",
    "music/english/Jesus Messiah.mp3",
    "music/english/Amazing Love.mp3",
    "music/english/My Savior My God.mp3"
  ];

  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadSong = (index) => {
    audioRef.current.src = songs[index];
    setCurrentIndex(index);
    if (isPlaying) audioRef.current.play();
  };

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    loadSong(nextIndex);
    setIsPlaying(true);
  };

  const prevSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(prevIndex);
    setIsPlaying(true);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px", backgroundColor: "#fff" }}>
      <h2>🎵 Music Player</h2>
      <p className="music-title">
  Current Song: {songs[currentIndex].split("/").pop()}
</p>

      <audio ref={audioRef} />

      {/* FIXED BUTTONS */}
      <div className="controls" style={{ marginBottom: "10px" }}>
        <button onClick={prevSong} style={{ marginRight: "10px" }}>⏮️</button>
        <button onClick={togglePlayPause} style={{ marginRight: "10px" }}>⏯️</button>
        <button onClick={nextSong}>⏭️</button>
      </div>

      <div>
        <label>Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => (audioRef.current.volume = e.target.value)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
