import { useState } from "react";
const task1 = () => {
  const [user, setuser] = useState({
    name: "ahmad hasim",
    age: 22,
    email: "example@gmail.com",
  });
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 card">
        <div className="card-body text-start">
          <p>Name: {user.name}</p>
          <p>age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};
export default task1;
