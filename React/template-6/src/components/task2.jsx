import { func } from "prop-types";
import React, { useEffect, useState } from "react";

function task2() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("the componenet has been unloaded");
  }, []);

  function increment() {
    setcount((prevcount) => prevcount + 1);
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Counter: {count} <button className="btn btn-outline-primary" onClick={increment}>+</button></h2>
       
      </div>
    </div>
  );
}

export default task2;
