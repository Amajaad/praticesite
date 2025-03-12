import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Item from "./item";
const hotcarousel = () => {
  const sliderRef1 = useRef(null); // Reference for the slider instance

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows since we'll add custom buttons
  };

  return (
    <div className="py-3">

      <Slider
        ref={sliderRef1}
        className="row justify-content-center mb-5"
        {...settings}
      >
        <div className=" text-center bg-white  justify-content-center border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_1.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$225</h5>
              <p className="d-inline-block">Gembird SPK-103</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_2.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$379</h5>
              <p className="d-inline-block">canon IXIJS 17</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_3.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_4.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$225</h5>
              <p className="d-inline-block">Huawei MediaPad</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card d-flex flex-column">
              <img src="img/new_5.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>

              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card d-flex flex-column">
              <img src="img/new_6.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>

              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-start border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_7.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Rapoo 7100p Gray</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_8.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$225</h5>
              <p className="d-inline-block">Canon EF</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_1.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$225</h5>
              <p className="d-inline-block">Gembird SPK-103</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_2.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$379</h5>
              <p className="d-inline-block">canon IXIJS 17</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>

        {/* p1 */}
        <div className=" text-center bg-white  justify-content-center border-start border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_7.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Rapoo 7100p Gray</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_8.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$225</h5>
              <p className="d-inline-block">Canon EF</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_1.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$225</h5>
              <p className="d-inline-block">Gembird SPK-103</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_2.jpg.webp" className="card-img mt-4" alt="" />
              <h5 className="mt-4">$379</h5>
              <p className="d-inline-block">canon IXIJS 17</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_3.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_4.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$225</h5>
              <p className="d-inline-block">Huawei MediaPad</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={225} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card d-flex flex-column">
              <img src="img/new_5.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>

              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card d-flex flex-column">
              <img src="img/new_6.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Huawei MediaPad</p>

              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white  justify-content-center border-start border-end">
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_7.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Rapoo 7100p Gray</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body pb-md-5 new-card">
              <img src="img/new_8.jpg.webp" className="card-img" alt="" />
              <h5 className="mt-2">$379</h5>
              <p className="d-inline-block">Canon EF</p>
              <div className="d-md-none border-0 bg-white text-center clearfix text-center">
                <Item price={379} />
              </div>
            </div>
          </div>
        </div>
        {/* p2 */}
      </Slider>
    </div>
  );
};

export default hotcarousel;
