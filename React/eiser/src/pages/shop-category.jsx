import Productlist from "../components/productlist";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Designer Handbag",
    price: 25,
    image: "./img/category/i1.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    price: 24,
    image: "./img/category/i2.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 20,
    image: "./img/category/i3.jpg",
  },
  {
    id: 4,
    name: "Sprots Shoes",
    price: 35,
    image: "./img/category/i4.jpg",
  },
  {
    id: 5,
    name: "Mechanical Watch",
    price: 30,
    image: "./img/category/i5.jpg",
  },
  {
    id: 6,
    name: "Sport Shoes",
    price: 29,
    image: "./img/category/i6.jpg",
  },
  {
    id: 7,
    name: "Designer Handbag",
    price: 45,
    image: "./img/category/i7.jpg",
  },
  {
    id: 8,
    name: "Jeans",
    price: 24,
    image: "./img/category/i2.jpg",
  },
  {
    id: 9,
    name: "Sneakers",
    price: 50,
    image: "./img/category/i8.jpg",
  },
];

function shopCategory() {
  const [searchProduct, setSearchProduct] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <>
      <div
        className="mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div class=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Shop Category</h2>
          <p>Very us move be blessed multiply night</p>
        </div>
        <div className=" col-md-3 breadcrumb">
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="index.html"
          >
            Home
          </a>
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="category.html"
          >
            Shop
          </a>
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="category.html"
          >
            Women Fashion
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <div className="border shadow-sm p-3 mt-4">
              <h5>Browse Categories</h5>
              <div className="border border-warning mb-2"></div>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Frozen Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Dried Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Fresh Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Meat Alternatives
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Fresh Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Meat Alternatives
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Meat
                  </a>
                </li>
              </ul>
            </div>

            <div className="border shadow-sm p-3 mt-3">
              <h5>Product Brand</h5>
              <div className="border border-warning mb-2"></div>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Gucci
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    LC wakiki
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Kenzy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Rolex
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Zenga
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Lacoste
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    DKNY
                  </a>
                </li>
              </ul>
            </div>

            <div className="border shadow-sm p-3 mt-3">
              <h5>Color Filter</h5>
              <div className="border border-warning mb-2"></div>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Black
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    White
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Black with Red
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    Gold
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-secondary text-decoration-none fw-semibold"
                  >
                    SpaceGray
                  </a>
                </li>
              </ul>
            </div>

            <div className="border shadow-sm p-3 mt-3">
              <h5>Price Filter</h5>
              <div className="border border-warning mb-2"></div>
              <input type="range" className="form-range " />
            </div>
          </div>

          <div className="col-md-8">
            <div className=" d-flex flex-column align-items-center justify-content-center">
              <h2 className="display-6 fw-semibold fst-italic">Our Products</h2>
              <div className="mb-4 justify-content-center">
                <input
                  type="text"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  className="form-control"
                  placeholder="Search for products..."
                />
              </div>

              {filteredProducts.length > 0 ? (
                <Productlist products={filteredProducts} />
              ) : (
                <div className="text-center mt-5">
                  <h3>this product wasn't found</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default shopCategory;
