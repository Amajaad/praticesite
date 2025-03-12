import React from "react";
import { useCart } from "../components/cartcontext";

function logo() {
  const { cart, totalPrice } = useCart();
  const push = {
    marginLeft: "-10px",

    paddingLeft: "9px",
    paddingRight: "9px",
    paddingTop: "8px",
    paddingBottom: "8px",
  };

  return (
    <>
      <div className="row justify-content-center align-items-center mt-3 py-md-3">
        <div className="col-md-3 col-4">
          <a href="" className="fs-1 text-decoration-none fw-bold ">
            OneTech
          </a>
        </div>
        <div className="col-md-5 d-md-block d-none">
          <div className="input-group border rounded border-info-subtle">
            <input type="search" className="form-control border-0" />
            <div class="dropdown">
              <a
                class="btn rounded-0 dropdown-toggle text-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Categories
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    All Categories
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Computers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Laptops
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cameras
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hardware
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Smartphones
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary">
              <img src="img/search.png.webp" alt="" />
            </button>
          </div>
        </div>
        <div className="col-md-3 col-7 ms-3">
          <div className="d-flex align-items-center ">
            <div className="">
              <img src="img/heart.png.webp" alt="" />
            </div>
            <div className="mt-3 ms-2 fs-6">
              <a href="" className="wish text-decoration-none d-none d-md-block">
                Wishlist
              </a>
              <p>0</p>
            </div>
            <div className=" ms-4">
              <img src="img/cart.png.webp" alt="" />
              <div
                className="badge text-bg-primary rounded-circle mt-3 position-absolute"
                style={push}
              >
                <span id="total-items">{cart.length}</span>
              </div>
            </div>
            <div className="mt-3 ms-4 fs-6">
              <a href="" className="wish text-decoration-none d-none d-md-block">
                Cart
              </a>
              <p className="total">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default logo;
