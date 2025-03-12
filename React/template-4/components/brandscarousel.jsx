import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const brandscarousel = () => {
  const settings = {
    dots: false,
    infinite: true, // Enables the infinite scrolling
    speed: 200,
    slidesToShow: 6, // Number of logos to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enables automatic scrolling
    autoplaySpeed: 5000,
    arrows: true, // Displays the left and right arrows
  };

  return (
    <Slider className="row justify-content-center mt-5" {...settings}>
    
      <div className="text-center img-cont">
        <img src="img/brands_1.jpg.webp" className="img-fluid" alt="" />
      </div>
      <div className="text-center img-cont">
        <img src="img/brands_2.jpg.webp" className="img-fluid" alt="" />
      </div>
      <div className="text-center img-cont ">
        <img src="img/brands_3.jpg.webp" className="img-fluid" alt="" />
      </div>
      <div className="text-center img-cont">
        <img src="img/brands_4.jpg.webp" className="img-fluid" alt="" />
      </div>
      <div className="text-center img-cont">
        <img src="img/brands_5.jpg.webp" className="img-fluid" alt="" />
      </div>
      <div className=" img-cont">
        <img src="img/brands_6.jpg.webp" className="img-fluid" alt="" />
      </div>
    </Slider>
  );
};

export default brandscarousel;
