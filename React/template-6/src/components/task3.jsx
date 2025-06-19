import { useState, useEffect } from "react";

function Task3() {
  const [title, setTitle] = useState("title");

  useEffect(() => {
    const inp = document.getElementById("t");
    document.title = inp.value;
  });
  return (
    <input
      type="text"
      id="t"
      placeholder="Enter title"
      className="rounded p-2"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
  );
}

export default Task3;
