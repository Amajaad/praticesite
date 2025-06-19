import { useState, useEffect } from "react";

function SetTimer() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const Intervaltime = setInterval(() => {
      setcount((prevcount) => prevcount + 1);
    }, 1000);

    return () => {
      clearInterval(Intervaltime);
      console.log("timer interval cleared");
    };
  }, []);

  return <>
  <h2 className="text-white mt-3">Timer: {count} seconds</h2>
  </>;
}
export default SetTimer;
