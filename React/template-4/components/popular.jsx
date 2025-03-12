import React, { useRef, useEffect } from "react";
import "../src/App.css";  // Add your styles here or import a CSS file

function Popular() {
  const bgcolor = {
    backgroundColor: "#eff6fa",
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    
    const moveNext = () => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-20%)`;

      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.appendChild(carousel.firstChild);
        carousel.style.transform = `translateX(0)`;
      }, 500);
    };

    const movePrev = () => {
      carousel.style.transition = "none";
      carousel.insertBefore(carousel.lastChild, carousel.firstChild);
      carousel.style.transform = `translateX(-20%)`;
      
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(0)`;
      }, 0);
    };

    document.getElementById("nextButton").addEventListener("click", moveNext);
    document.getElementById("prevButton").addEventListener("click", movePrev);

    return () => {
      document.getElementById("nextButton").removeEventListener("click", moveNext);
      document.getElementById("prevButton").removeEventListener("click", movePrev);
    };
  }, []);

  return (
    <>
      <div className="row justify-content-center py-5">
        <div className="col-md-4 col-10">
          <h2>
            Popular <br /> Categories
          </h2>
          <div className="mb-3">
            <button
              id="prevButton"
              className="btn btn-light btn-sm shadow rounded-circle me-2"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              id="nextButton"
              className="btn btn-light btn-sm shadow rounded-circle"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <a href="" className="small text-decoration-none">
            Full Catalog
          </a>
        </div>
        <div className="col-md-7 col-10 overflow-hidden position-relative">
          <div className="d-flex align-items-start w-100 populor-carousel-cards" ref={carouselRef}>
            <div className="card card-car col-2 border-0 shadow-sm rounded">
              <div className="card-body text-center d-flex flex-column align-items-center">
                <img
                  src="img/popular_1.png.webp"
                  className="img-fluid rounded mt-2"
                  alt=""
                />
                <p className="mt-3">
                  Smartphones <br /> & Tablets
                </p>
              </div>
            </div>
            <div className="card card-car col-2 border-0 shadow-sm rounded" style={bgcolor}>
              <div className="card-body text-center">
                <img
                  src="img/popular_2.png.webp"
                  className="img-fluid rounded mt-2"
                  alt=""
                />
                <p className="mt-3">
                  Computers <br /> & Laptops
                </p>
              </div>
            </div>
            <div className="card card-car col-2 border-0 shadow-sm rounded">
              <div className="card-body text-center">
                <img
                  src="img/popular_3.png.webp"
                  className="img-fluid rounded mt-2"
                  alt=""
                />
                <p className="mt-3">Gadgets</p>
              </div>
            </div>
            <div className="card card-car col-2 border-0 shadow-sm rounded" style={bgcolor}>
              <div className="card-body text-center">
                <img
                  src="img/popular_4.png.webp"
                  className="img-fluid rounded mt-2"
                  alt=""
                />
                <p className="mt-3">
                  Video Games <br /> & Consoles
                </p>
              </div>
            </div>
            <div className="card card-car col-2 border-0 shadow-sm rounded">
              <div className="card-body text-center">
                <img
                  src="img/popular_5.png.webp"
                  className="img-fluid rounded mt-2"
                  alt=""
                />
                <p className="mt-3">Accessories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
