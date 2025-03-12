function nav() {
  const height = {
    height: "100vh",
    overflowY: "auto",
  };
  return (
    <div className="d-flex d-md-none row justify-content-between align-items-center text-bg-primary">
      <div className="col-3 ">
        <div class="dropdown-center">
          <button
            class="btn btn-primary dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-list me-2"></i>
            Categories
          </button>
          <ul class="dropdown-menu rounded-0 ms-1">
            <li>
              <a class="dropdown-item" href="#">
                Computers & Laptops
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Cameras & Photos
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Smartphones & Tablets
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                TV & Audio
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Gadgets
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Car Electronics
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Video Games & Consoles
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-3 align-items-center">
        <a
          className="btn text-white d-flex align-items-center"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <span>Menu</span>
          <i className="bi bi-list fs-3 ms-2 text-white fw-bolder"></i>
        </a>
      </div>

      <div
        className="offcanvas offcanvas-top text-bg-primary"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={height}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="row offcanvas-body ">
          <ul className="text-decoration-none d-flex flex-column gap-2 list-unstyled text-bg-primary">
            <div className="">
              <input
                type="search"
                className="form-control "
                placeholder="Search"
              />
            </div>
            <li className="accordion ">
              <div class="accordion-item text-bg-primary border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed text-bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Language
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          English
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Italian
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Spanish
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Japanese
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="accordion ">
              <div class="accordion-item text-bg-primary border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed text-bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Currency
                  </button>
                </h2>
                <div
                  id="flush-collapse2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          US Dollar
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          EUR Euro
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          GPD British Pound
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          JPY Japanese Yen
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="accordion">
              <div className="accordion-item text-bg-primary border-0">
                <div className="accordion-header">
                  <a
                    href=""
                    className="text-bg-primary accordion-button collapsed text-decoration-none"
                  >
                    Home
                  </a>
                </div>
              </div>
            </li>
            <li className="accordion ">
              <div class="accordion-item text-bg-primary border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed text-bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Super Deals
                  </button>
                </h2>
                <div
                  id="flush-collapse3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Super Deals
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="accordion ">
              <div class="accordion-item text-bg-primary border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed text-bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Featured Brands
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Featured Brands
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="accordion ">
              <div class="accordion-item text-bg-primary border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed text-bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Trending Styles
                  </button>
                </h2>
                <div
                  id="flush-collapse5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Trending Styles
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Menu Item
                        </a>
                      </li>
                      <li className="border mb-2 mt-2"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="accordion">
              <div className="accordion-item text-bg-primary border-0">
                <div className="accordion-header">
                  <a
                    href=""
                    className="text-bg-primary accordion-button collapsed text-decoration-none"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </li>
            <li className="accordion">
              <div className="accordion-item text-bg-primary border-0">
                <div className="accordion-header">
                  <a
                    href=""
                    className="text-bg-primary accordion-button collapsed text-decoration-none"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </li>
            <div className="row gap-2">
            <div className="col-6 d-flex">
             
                <span className="fs-3">
                  <i class="bi bi-phone "></i>
                </span>
                <p className="small mt-1">+38 068 005 3570</p>
              
            </div>
            <div className="col-5">
              <div className="d-flex">
                <span className="fs-3">
                  <i class="bi bi-envelope me-2"></i>
                </span>
                <p className="fs-6 mt-1">
                  <a href="" className="link-secondary text-decoration-none">
                    fastsales@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          </ul>
        
        </div>
      </div>
    </div>
  );
}
export default nav;
