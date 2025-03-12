// src/Countdown.js
import React, { useState, useEffect } from "react";

const Countdown = ({ hours, minutes, seconds }) => {
  const [time, setTime] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="d-flex" style={{ textAlign: "center", fontSize: "1.4rem" }}>
      <div className="border border-2 p-2 fs-4">{time.hours.toString().padStart(2, "0")} </div>
      <div className="border border-2 p-2 fs-4">{time.minutes.toString().padStart(2, "0")}</div>
      <div className="border border-2 p-2 fs-4">{time.seconds.toString().padStart(2, "0")}</div>
    </div>
  );
};

export default Countdown;
