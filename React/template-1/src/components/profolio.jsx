// src/App.js
import React from "react";
import ImagePreview from "./imgview";

function profolio() {
  return (
    <div className="proflio row text-center justify-content-around align-content-center">
      <div className="shape"></div>
      <ImagePreview />
      <div className="card col-md-5 col-9 mb-5 ms-md-auto p-4">
        <div className="display-4 text-start fw-semibold">Our Portfolio</div>
        <div className="fs-4 mt-3 mb-4 text-start fw-light w-75">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="text-start">
          <button className="btn btn-primary fs-5 px-5 py-3 rounded-pill">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default profolio;
