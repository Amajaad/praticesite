function footer() {
  const colorbg = {
    backgroundColor: "#fafafa",
  };
  return (
    <div className="row py-5">
      <div className="row shadow py-4 justify-content-around" style={colorbg}>
        <div className="col-md-4 col-10">
          <div className="d-flex">
            <img
              src="img/send.png.webp"
              className="img-fluid h-50 me-3"
              alt=""
            />
            <div className="">
              <h4>Sign up for Newsletter</h4>
              <p>...and receive %20 coupon for first shopping.</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10">
          <div className="d-flex flex-column flex-md-row gap-md-0 gap-3">
            <input
              type="email"
              className="form-control rounded-end-0 py-2"
              placeholder="Enter your email address"
            />
            <button className="btn btn-primary rounded-start-0 py-2 fs-5">
              Subscribe
            </button>
            <button className="btn text-primary">Unsubscribe</button>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-around">
        <div className="col-md-4 col-8 text-start">
          <h1>OneTech</h1>
          <p className="fw-semibold small">Got Question? Call Us 24/7</p>
          <p className="text-primary fs-5">+38 068 005 3570</p>
          <p className="small text-secondary">
            17 Princess Road, <br /> London Grester London NW18JR, UK
          </p>
          <div className="d-flex  links gap-2">
            <div className="bg-body-secondary p-2 rounded-circle">
              <a href="">
                {" "}
                <i class="bi bi-facebook "></i>
              </a>
            </div>
            <div className="bg-body-secondary p-2 rounded-circle">
              <a href="">
                {" "}
                <i class="bi bi-twitter"></i>
              </a>
            </div>
            <div className="bg-body-secondary p-2 rounded-circle">
              <a href="">
                {" "}
                <i class="bi bi-youtube"></i>
              </a>
            </div>
            <div className="bg-body-secondary p-2 rounded-circle">
              <a href="">
                {" "}
                <i class="bi bi-google"></i>
              </a>
            </div>
            <div className="bg-body-secondary p-2 rounded-circle">
              <a href="">
                {" "}
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-8">
          <div className="d-flex flex-md-row flex-column mt-3 mt-md-0 gap-4">
            <ul className="list-unstyled ">
              <h6>Find it fast</h6>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  TV & Audio
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Computers & Laptops
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Cameras & Photos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Hardware
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Smartphones & Tablets
                </a>
              </li>
            </ul>

            <ul className="list-unstyled ">
              <h6>Gadgets</h6>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Car Electronics
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Video Games & Consoles
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Cameras & Photos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Hardware
                </a>
              </li>
            </ul>

            <ul className="list-unstyled ">
              <h6>Customer Care</h6>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Wish List
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Customer Services
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Returns / Exchange
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-secondary text-decoration-none small"
                >
                  Product Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-md-5 small mt-3">
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <i class="bi bi-heart-fill"></i> by
          <a href="" className="text-decoration-none">
            {" "}
            Colorlib
          </a>
        </div>
        <div className="col-md-5 mt-3">
          <div className=" d-flex gap-2 align-items-center justify-content-center">
            <img
              src="./img/logos_1.png.webp"
              width={35}
              className="img-fluid h-50"
              alt=""
            />
            <img
              src="./img/logos_2.png.webp"
              width={35}
              className="img-fluid h-50"
              alt=""
            />
            <img
              src="./img/logos_3.png.webp"
              width={35}
              className="img-fluid h-50"
              alt=""
            />
            <img
              src="./img/logos_4.png.webp"
              width={35}
              className="img-fluid h-50"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
