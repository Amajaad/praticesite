function footer() {
  return (
    <>
      <footer className="row justify-content-center align-items-center bg-black text-white py-3">
        <div className="row justify-content-around">
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              Bussines Time
            </h5>
            <p>Monday - Friday: 08.00am to 05.00pm</p>
            <p>Saturday: 10.00am to 08.00pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              Newsetteler
            </h5>
            <input
              type="email"
              className="form-control rounded-0"
              placeholder="email address"
            />
            <button className="btn btn-warning text-white mt-3 rounded-0">
              submit
            </button>
          </div>
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              Social Media
            </h5>
            <small className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </small>
            <div className="d-flex gap-2 socials mt-2 ">
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-google"></i>
              </a>
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-pinterest"></i>
              </a>
              <a href="" className="text-white border border-white fs-4 px-2">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="row justify-content-around">
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              About Freshshop
            </h5>
            <small className="mt-3 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br />
            </small>
            <small className=" text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              Information
            </h5>
            <ul className=" mt-3 text-secondary info-links">
              <a href="">
                <li>About Us</li>
              </a>
              <a href="">
                <li>Customer Service</li>
              </a>
              <a href="">
                <li>Our Sitemap</li>
              </a>
              <a href="">
                <li>Privacy Policy</li>
              </a>
              <a href="">
                <li>Terms & Conditions</li>
              </a>
              <a href="">
                <li>Delivery Information</li>
              </a>
            </ul>
          </div>
          <div className="col-md-3 text-start">
            <h5 className="border-bottom border-3 border-warning text-start">
              About Freshshop
            </h5>
            <div className="d-flex align-items-start">
              <div>
                <i class="bi bi-geo-alt fs-5"></i>
              </div>
              <div className="text-secondary ms-2 px-3">
                <p>
                  Adres: Michael I. Gün 3756 Preston Caddesi Wichita, KS 67213
                  Serisi
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div>
                <i class="bi bi-telephone-fill fs-5"></i>
              </div>
              <div className="text-secondary ms-2 px-3">
                <p>Phone: +1-888 705 770</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div>
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div className="text-secondary ms-2 px-3">
                <p>Email: contactinfo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="row justify-content-center bg-dark position-relative py-3 text-white">
        All Rights Reserved. © 2018 ThewayShop Design By : html design
      </div>
    </>
  );
}
export default footer;
