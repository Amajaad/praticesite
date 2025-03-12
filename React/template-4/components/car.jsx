import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [items, setItems] = useState([
    { imgSrc: "item1.jpg", title: "Item 1", buttonText: "Learn More" },
    { imgSrc: "item2.jpg", title: "Item 2", buttonText: "Learn More" },
    { imgSrc: "item3.jpg", title: "Item 3", buttonText: "Learn More" },
    { imgSrc: "item4.jpg", title: "Item 4", buttonText: "Learn More" },
    { imgSrc: "item5.jpg", title: "Item 5", buttonText: "Learn More" },
    { imgSrc: "item6.jpg", title: "Item 6", buttonText: "Learn More" },
    { imgSrc: "item7.jpg", title: "Item 7", buttonText: "Learn More" },
    { imgSrc: "item8.jpg", title: "Item 8", buttonText: "Learn More" },
    { imgSrc: "item9.jpg", title: "Item 9", buttonText: "Learn More" },
    { imgSrc: "item10.jpg", title: "Item 10", buttonText: "Learn More" },
  ]);

  const carouselRef = useRef(null);

  useEffect(() => {
    const handleSlide = (e) => {
      const direction = e.direction;
      setItems((prevItems) => {
        if (direction === "left") {
          const firstItem = prevItems.shift();
          return [...prevItems, firstItem];
        } else {
          const lastItem = prevItems.pop();
          return [lastItem, ...prevItems];
        }
      });
    };

    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("slide.bs.carousel", handleSlide);

    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {items.slice(0, 5).map((item, index) => (
              <div className="col-2" key={index}>
                <img
                  src={item.imgSrc}
                  className="d-block w-100"
                  alt={item.title}
                />
                <h5>{item.title}</h5>
                <button className="btn btn-primary">{item.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev bg-danger"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={() => carouselRef.current.carousel("prev")}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next bg-danger"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={() => carouselRef.current.carousel("next")}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
