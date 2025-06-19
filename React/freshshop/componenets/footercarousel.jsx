import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css"; // Import your CSS file for custom styles
const ImageCarousel = () => {
  const images = [
    "/images/instagram-img-01.jpg",
    "/images/instagram-img-02.jpg",
    "/images/instagram-img-03.jpg",
    "/images/instagram-img-04.jpg",
    "/images/instagram-img-05.jpg",
    "/images/instagram-img-06.jpg",
    "/images/instagram-img-07.jpg",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        minHeight: "300px", // Ensure container has height
        backgroundColor: "#f5f5f5", // Temporary background to see container
      }}
      className="row"
    >
      <Carousel
        className="img-carousel"
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        arrows={true}
        rewind={true} // This helps with infinite looping
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              padding: "0 10px",
              height: "100%",
            }}
          >
            <div className="card footer-carousel-item">
              <img
                className="card-img"
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "block", // Ensure image is displayed as block
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Missing";
                }}
              />
              <div className="card-img-overlay">
                <div className="">
                  <a href="" className="text-white"><i class="bi bi-instagram text-center display-4"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
