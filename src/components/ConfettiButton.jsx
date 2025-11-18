import React from "react";
import confetti from "canvas-confetti";

function ConfettiButton() {
  const handleClick = () => {
    confetti();
  };

  return <button onClick={handleClick}>🎉 Celebrate!</button>;
}

export default ConfettiButton;
