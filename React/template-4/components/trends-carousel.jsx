import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

const trendscarousel = () => {
  const sliderRef1 = useRef(null); // Reference for the slider instance

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows since we'll add custom buttons
  };

  return (
    <div className="py-3 px-3 trendcarouselbg mt-4">
      <div className="row justify-content-around align-items-center px-3 mt-4">
        <div className="col-md-3">
          <h1 className=" display-6 fw-semibold">
            Trends <br /> 2018
          </h1>
          <p className="text-secondary small">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing Donec et.
          </p>
          <div className="custom-buttons">
            <button
              className="btn btn-light me-2 border-0 shadow rounded-circle"
              onClick={() => sliderRef1.current.slickPrev()}
            >
              <i class="bi bi-arrow-left-short text-secondary"></i>
            </button>
            <button
              className="btn btn-light border-0 shadow rounded-circle"
              onClick={() => sliderRef1.current.slickNext()}
            >
              <i class="bi bi-arrow-right-short text-secondary"></i>
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <Slider
            ref={sliderRef1}
            className="row d-flex justify-content-around  mb-5"
            {...settings}
          >
            <div className="text-center col-3 w-75 shadow">
              <div className="card border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-center ">
                  <img
                    src="./img/trends_1.jpg.webp"
                    className=" img-fluid py-1"
                    alt=""
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="text-secondary small">smartphones
                      <a className="fw-light text-black fs-6 text-decoration-none d-block stretched-link">
                        Jump White
                      </a>
                      </p>
                     
                    </div>

                    <p
                      href=""
                      className="link-dark text-decoration-none fs-5 fw-semibold"
                    >
                      $379
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center col-2 w-75 shadow">
              <div className="card border-0 shadow-sm">
                <div className="card-body  d-flex flex-column justify-content-center ">
                  <img
                    src="./img/trends_2.jpg.webp"
                    className=" w-50 ms-5 py-3"
                    alt=""
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="text-secondary small">smartphones
                      <a className="fw-light text-black fs-6 text-decoration-none d-block stretched-link">
                        Samsung charm
                      </a>
                      </p>
                    
                    </div>

                    <p
                      href=""
                      className="link-dark text-decoration-none fs-5 fw-semibold"
                    >
                      $379
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center col-2 shadow w-75 ">
              <div className="card border-0 shadow-sm">
                <div className="card-body  d-flex flex-column justify-content-center ">
                  <img
                    src="./img/trends_3.jpg.webp"
                    className="h-50 w-100 py-1"
                    alt=""
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="text-secondary small">smartphones
                      <a className="fw-light text-black fs-6 text-decoration-none d-block stretched-link">
                        DJI Phantom 3
                      </a>
                      </p>
                    
                    </div>

                    <p
                      href=""
                      className="link-dark text-decoration-none fs-5 fw-semibold"
                    >
                      $379
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default trendscarousel;
