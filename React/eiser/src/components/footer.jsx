import {
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaBaseballBall,
  FaInstagram,
} from "react-icons/fa";

function footer() {
  return (
    <div
      className="row justify-content-center py-5 w-100 m-0 footer"
      style={{ backgroundColor: "#0d0d1f" }}
    >
      <div className="col-md-2 text-white">
        <h5 className="fw-semibold">Top products</h5>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Managed websites
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Manage Reputation
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Power Tools
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Marketing Service
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 text-white">
        <h5 className="fw-semibold">Quick Links</h5>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Jobs
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Brand Assets
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 text-white">
        <h5 className="fw-semibold">Features</h5>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Jobs
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Brand Assets
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 text-white">
        <h5 className="fw-semibold">Resources</h5>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Guides
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Research
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Experts
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none  link-secondary">
              Agencies
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-3 text-white">
        <h5 className="fw-semibold">Newsletter</h5>
        <p className="small text-secondary">
          You can trust us. we only send promo offers,
        </p>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            aria-label="Enter your email"
          />
          <button className="btn btn-warning text-white" type="button">
            Subscribe
          </button>
        </div>
      </div>

      <div className="row text-white mt-4 justify-content-between">
        <div className="col-md-6 ms-md-4">
          <p>
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <FaHeart /> by Colorlib
          </p>
        </div>
        <div className="col-md-5">
          <div className="d-flex gap-3 socials align-content-center">
            <a href="#" className="text-decoration-none p-2   text-white">
              <FaFacebook className="fs-5 " />
            </a>
            <a href="#" className="text-decoration-none p-2   text-white">
              <FaTwitter className="fs-5 " />
            </a>
            <a href="#" className="text-decoration-none p-2   text-white">
              <FaBaseballBall className="fs-5 " />
            </a>
            <a href="#" className="text-decoration-none  p-2  text-white">
              <FaInstagram className="fs-5 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
