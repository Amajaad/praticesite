import React, { useState } from "react";

function Task3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("waiting for login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    let name = "Amjad";
    let correctEmail = "amjad@gmail.com";
    let correctPassword = "12345";

    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
      setMessage(`Welcome, ${name}!`);
    } else {
      setIsLoggedIn(false);
      setMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        className="form-control mt-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mt-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="btn btn-outline-primary mt-2">
        Log in
      </button>
      <h4 className="mt-2">{message}</h4>
    </div>
  );
}

export default Task3;
