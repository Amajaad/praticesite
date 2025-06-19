import { useCart } from "../cart_componenets/CartContext";
import { Link } from "react-router-dom";
function navbar() {
  const { cart, totalPrice, cartCount } = useCart(); // Add cartCount to destructuring
  return (
    <navbarprop className="sticky-top  ">
      <div className="row bg-black text-white py-2 align-items-center justify-content-md-start justify-content-center ">
        <div className="col-1 d-md-block d-none ms-md-4">
          <select className="btn btn-warning form-select text-uppercase">
            <optgroup className="bg-white">
              <option value="">jpn</option>
              <option value="">usd</option>
              <option value="">eur</option>
            </optgroup>
          </select>
        </div>
        <div className="col-3 d-md-block d-none">
          <h6>
            contact us:{" "}
            <span>
              <a href="" className="link-warning text-decoration-none">
                {" "}
                +11 900 800 100
              </a>
            </span>
          </h6>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-4">
              <h6>
                <i className="bi bi-person-fill"></i>
                <a href="" className="text-decoration-none text-white">
                  {" "}
                  My Account
                </a>
              </h6>
            </div>
            <div className="col-4">
              <h6>
                <i className="bi bi-send-fill"></i>
                <a href="" className="text-decoration-none text-white">
                  {" "}
                  our location
                </a>
              </h6>
            </div>
            <div className="col-4">
              <h6>
                <i className="bi bi-headset"></i>
                <a href="" className="text-decoration-none text-white">
                  {" "}
                  contact us
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-3 d-none d-md-block">
          <h6>
            <i className="bi bi-cart"></i> 50% - 80% off on all items
          </h6>
        </div>
        <div className="col-md-1">
          <select className="btn btn-warning form-select-sm text-uppercase">
            <option value="register here">Register here</option>
            <option value="">sign in</option>
          </select>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" className="img-fluid ms-md-2" alt="" />
        </a>
        <div className="d-flex d-md-none">
          <Link 
            to="/checkout" 
            className="text-dark ms-2 text-decoration-none mt-2 fs-5 position-relative"
          >
            <i className="bi bi-bag-fill"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
            <p className="d-none d-md-block">My Cart</p>
          </Link>
          <p className="total badge text-dark">${totalPrice.toFixed(0)}</p>
        </div>
        <div
          className="collapse navbar-collapse me-3 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll fs-6 ">
            <li className="nav-item text-uppercase">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item text-uppercase dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu dropdown-menu-dark border-0 bg-black">
                <li>
                  <a className="dropdown-item" href="#">
                    sidebar shop
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    shop detail
                  </a>
                </li>
                <li></li>
                <li>
                  <a className="dropdown-item" href="#">
                    cart
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    checkout
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    my account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    wishlist
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                contact us
              </a>
            </li>
          </ul>
          <form className="" role="search">
            <button
              className="btn btn-outline-warning rounded-circle"
              type="submit"
            >
              <i class="bi bi-search"></i>
            </button>
          </form>
         
          <div className="d-md-flex d-none">
            <Link
              to="/checkout"
              className="text-dark ms-2 text-decoration-none mt-2 fs-5 position-relative"
            >
              <i className="bi bi-bag-fill"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
              <p className="d-none d-md-inline">My Cart</p>
            </Link>
            <p className="total badge text-dark">${totalPrice.toFixed(0)}</p>
          </div>
        </div>
      </nav>
    </navbarprop>
  );
}
export default navbar;
