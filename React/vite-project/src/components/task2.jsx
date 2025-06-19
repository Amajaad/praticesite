import React from "react";
import proptypes from "prop-types";
function Person(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 card">
        <div className="card-body text-start">
          <p>Name: {props.name}</p>
          <p>age: {props.age}</p>
          <p>job: {props.job ? props.job : "Error 404"}</p>
          <p>Email: {props.email}</p>
          <p>
            {props.image ? (
              <img
                src={`/${props.image}`}
                alt={`${props.name}'s photo`}
                className="img-fluid w-25 rounded-circle"
              />
            ) : (
              <span>No image found</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {
  name: proptypes.string,
  age: proptypes.number,
  job: proptypes.string,
  email: proptypes.string,
  image: proptypes.string,
};
function task2() {
  return (
    <Person
      name="ahmad hashim"
      age={23}
      email="example@gmail.com"
      job="software developer"
      image=""
    />
  );
}
export default task2;
