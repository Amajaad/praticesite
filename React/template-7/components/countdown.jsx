import { useState, useEffect } from "react";

function Countdown() {
  const [timer, settimer] = useState("the alarm will go off in 5 seconds!");
  const [showButton, setShowButton] = useState(false);
  let sound = new Audio("/alarm-327234.mp3");
  const startsound = () => {
    sound.play();
    setShowButton(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startsound();
      settimer("");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handleReplay = () => {
    settimer("the alarm will go off in 5 seconds!");

    setShowButton(false);
    sound.pause();
    // Restart the timeout and sound
    clearTimeout(window.countdownTimeout);
    window.countdownTimeout = setTimeout(() => {
      startsound();
      settimer("");
    }, 5000);
  };

  useEffect(() => {
    window.countdownTimeout = setTimeout(() => {
      startsound();
      settimer("");
    }, 5000);
    return () => {
      clearTimeout(window.countdownTimeout);
    };
  }, []);

  return (
    <>
      <h2 className="mt-4">{timer}</h2>
      {showButton && (
        <button className="btn btn-primary" onClick={handleReplay}>
          Replay
        </button>
      )}
    </>
  );
}
export default Countdown;
