import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

const viewcarousel = () => {
  const sliderRef1 = useRef(null); // Reference for the slider instance
const bgcolorviewed = {
  backgroundColor: "#eff6fa",
}
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows since we'll add custom buttons
  };

  return (
    <div className="py-3" style={bgcolorviewed}>
      <div className="row align-items-center justify-content-between px-5">
        <div className="col-4 fw-semibold fs-3">Recently Viewed</div>
        <div className="col-2 custom-buttons text-center  clearfix float-end">
          <button
            className="btn btn-light me-2 border-0  rounded-circle"
            onClick={() => sliderRef1.current.slickPrev()}
          >
            <i class="bi bi-arrow-left-short"></i>
          </button>
          <button
            className="btn btn-light border-0 rounded-circle"
            onClick={() => sliderRef1.current.slickNext()}
          >
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
        <hr />
      </div>
      <Slider
        ref={sliderRef1}
        className="row justify-content-center mb-5 px-5 gap-3"
        {...settings}
      >
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_1.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className="text-warning-emphasis fs-5 fw-bold align-items-center mt-3">
                $225
                <span className="fw-light text-black fs-6 text-decoration-line-through">
                  $300
                </span>
              </p>
              <a href="" className="link-dark text-decoration-none">
                Beoplay H7
              </a>
            </div>
          </div>
        </div>
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_2.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className="text-warning-emphasis fs-5 fw-bold align-items-center mt-3">
                <span className=" text-black fs-5">$300</span>
              </p>
              <a href="" className="link-dark text-decoration-none">
                LUNA Smartphone
              </a>
            </div>
          </div>
        </div>
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_3.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className=" fs-5 fw-bold align-items-center mt-3">$225</p>
              <a href="" className="link-dark text-decoration-none">
                Samsung 3730F.
              </a>
            </div>
          </div>
        </div>
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_4.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className=" fs-5 fw-bold align-items-center mt-3">$379</p>
              <a href="" className="link-dark text-decoration-none">
                Huawei MediaPad...
              </a>
            </div>
          </div>
        </div>
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_5.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className="text-warning-emphasis fs-5 fw-bold align-items-center mt-3">
                $225
                <span className="fw-light text-black fs-6 text-decoration-line-through">
                  $300
                </span>
              </p>
              <a href="" className="link-dark text-decoration-none">
                PlayStation 4
              </a>
            </div>
          </div>
        </div>
        <div className="text-center col-2 px-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body  d-flex flex-column justify-content-center ">
              <img
                src="./img/view_6.jpg.webp"
                className="w-50 h-50 ms-5"
                alt=""
              />
              <p className=" fs-5 fw-bold align-items-center mt-3">$275</p>
              <a href="" className="link-dark text-decoration-none">
                Speedlink...
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default viewcarousel;
