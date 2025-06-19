import React, { useEffect, useState } from "react";

function Task4() {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("Timer running...");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("The component has been unloaded");
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>Timer: {timer} seconds</h2>
        <h1 className="text-center">{message}</h1>
      </div>
    </div>
  );
}

export default Task4;