function bannercarousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide position-sticky"
    >
      <div className="carousel-inner">
        <div className="carousel-item banner-1 active">
          <div className="d-flex flex-column mt-5 align-items-center ">
            <div className="w-50 px-3">
              <p className="display-3 text-white fw-bolder">
                Welcome To Freshshop
              </p>
              <h6 className=" text-white">
                See how your users experience your website in realtime or view
                trends to see any changes in performance over time.
              </h6>
              <div className="d-block justify-content-center">
                <button className="mt-2 btn btn-warning fs-5 text-white rounded-0 banner-btn">
                  Shop new
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item banner-2">
          {" "}
          <div className="d-flex flex-column mt-5 align-items-center ">
            <div className="w-50 px-3">
              <p className="display-3 text-white fw-bolder">
                Welcome To Freshshop
              </p>
              <h6 className=" text-white">
                See how your users experience your website in realtime or view
                trends to see any changes in performance over time.
              </h6>
              <div className="d-block justify-content-center">
                <button className="mt-2 btn btn-warning fs-5 text-white rounded-0 banner-btn">
                  Shop new
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item banner-3">
          {" "}
          <div className="d-flex flex-column mt-5 align-items-center ">
            <div className="w-50 px-3">
              <p className="display-3 text-white fw-bolder">
                Welcome To Freshshop
              </p>
              <h6 className=" text-white">
                See how your users experience your website in realtime or view
                trends to see any changes in performance over time.
              </h6>
              <div className="d-block justify-content-center">
                <button className="mt-2 btn btn-warning fs-5 text-white rounded-0 banner-btn">
                  Shop new
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active rounded-2"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className="rounded-2"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className="rounded-2"
          aria-label="Slide 3"
        ></button>
      </div>
      <button
        className="carousel-control-prev carousel-control btn btn-warning"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-control btn btn-warning"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default bannercarousel;
