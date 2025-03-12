import Countdown from "./countdown";
import Item from "./item";
function deals() {
  const width = {
    width: "18px",
  };
  return (
    <>
      <div className="row justify-content-center py-3">
        <div className="col-md-3 col-10">
          <section className="card">
            <div className="card-header d-flex  justify-content-between align-items-start">
              <p className="fs-6 fw-semibold">Deals Of The Week</p>
              <div className="d-flex fs-6">
                <button
                  className="btn btn-light shadow rounded-circle btn-sm"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <i class="bi bi-chevron-left fw-bold"></i>
                </button>
                <button
                  className="btn btn-light shadow rounded-circle ms-2 btn-sm"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/deals.png.webp"
                      className="d-block img-fluid w-100"
                      alt="..."
                    />
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="">
                        <a
                          href=""
                          className="link-secondary small text-decoration-none"
                        >
                          Headphones
                        </a>
                        <h4>Beoplay H7</h4>
                      </div>
                      <div className="">
                        <p className=" text-secondary small">
                          $300
                          <span className="text-warning-emphasis fs-3">$225</span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between align-middle">
                      <div className="">
                        <h6>Hurry Up</h6>
                        <p className="small text-secondary">Offer end in:</p>
                      </div>
                      <div className="">
                        <Countdown hours={47} minutes={59} seconds={30} />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/deals.png.webp"
                      className="d-block img-fluid w-100"
                      alt="..."
                    />
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="">
                        <a
                          href=""
                          className="link-secondary small text-decoration-none"
                        >
                          Headphones
                        </a>
                        <h4>Beoplay H7</h4>
                      </div>
                      <div className="">
                        <p className=" text-secondary small">
                          $300
                          <span className="text-warning-emphasis fs-3">$225</span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between align-middle">
                      <div className="">
                        <h6>Hurry Up</h6>
                        <p className="small text-secondary">Offer end in:</p>
                      </div>
                      <div className="">
                        <Countdown hours={47} minutes={59} seconds={30} />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/deals.png.webp"
                      className="d-block img-fluid w-100"
                      alt="..."
                    />
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="">
                        <a
                          href=""
                          className="link-secondary small text-decoration-none"
                        >
                          Headphones
                        </a>
                        <h4>Beoplay H7</h4>
                      </div>
                      <div className="">
                        <p className=" text-secondary small">
                          $300
                          <span className="text-warning-emphasis fs-3">$225</span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between align-middle">
                      <div className="">
                        <h6>Hurry Up</h6>
                        <p className="small text-secondary">Offer end in:</p>
                      </div>
                      <div className="">
                        <Countdown hours={47} minutes={59} seconds={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-8">
          <p className="border-bottom border-primary d-inline fs-4 border-4">
            Featured
          </p>
          <hr />
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row ">
                  <div className="col-md-3 col-8 mt-md-0 mt-2 ">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_1.png.webp"
                        className="w-75 ms-4 img-fluid p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-warning-emphasis fs-5 fw-semibold">
                              $225
                            </span>
                            <span className="text-secondary small ms-3">
                              $300
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Huawei MediaPad...
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_3.png.webp"
                        className="w-75 ms-4 img-fluid p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Sony MDRZX310W
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_5.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $225
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Canon STM Kit...
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_7.png.webp"
                        className="w-75 ms-4 img-fluid h-100"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Lenovo IdeaPad
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_2.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Apple iPod shuffle
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_4.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-warning-emphasis fs-5 fw-semibold">
                              $225
                            </span>
                            <span className="text-secondary small ms-3">
                              $300
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            LUNA Smartphone
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_6.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Samsung J330F.„
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_8.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="fw-semibold fs-5 fw-semibold">
                              $225
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Digitus EDNET.
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row ">
                  <div className="col-md-3 col-8 mt-md-0 mt-2 ">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_1.png.webp"
                        className="w-75 ms-4 img-fluid p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-warning-emphasis fs-5 fw-semibold">
                              $225
                            </span>
                            <span className="text-secondary small ms-3">
                              $300
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Huawei MediaPad...
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_3.png.webp"
                        className="w-75 ms-4 img-fluid p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Sony MDRZX310W
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_5.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $225
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Canon STM Kit...
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-md-0 mt-2">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_7.png.webp"
                        className="w-75 ms-4 img-fluid h-100"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Lenovo IdeaPad
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_2.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-black fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Apple iPod shuffle
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_4.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="text-warning-emphasis fs-5 fw-semibold">
                              $225
                            </span>
                            <span className="text-secondary small ms-3">
                              $300
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            LUNA Smartphone
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_6.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="fw-semibold fs-5 fw-semibold">
                              $379
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Samsung J330F.„
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={379} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-8 mt-3">
                    <div className="card featured-product border-top-0 border-bottom-0 justify-content-center shadow">
                      <img
                        src="img/featured_8.png.webp"
                        className="w-75 ms-4 img-fluid h-100 p-2"
                        alt=""
                      />
                      <div className="card-body">
                        <div className="text-center ">
                          <p>
                            <span className="fw-semibold fs-5 fw-semibold">
                              $225
                            </span>
                          </p>
                          <a
                            href=""
                            className="link-dark small fw-semibold text-decoration-none"
                          >
                            Digitus EDNET.
                          </a>
                          <div className="d-block justify-content-center mt-3 buy-btn">
                            <Item price={225} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-indicators position-relative mt-3">
              <div className=" bg-primary rounded-circle">
                <button
                  type="button"
                  style={width}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active bg-primary"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              </div>
              <div className="rounded-circle bg-primary ms-3">
                <button
                  type="button"
                  style={width}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  class=" bg-primary"
                  aria-label="Slide 2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default deals;
