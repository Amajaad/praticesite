import { Row, Col, Image, Button } from "react-bootstrap";

const ProductCheckout = () => {
  return (
    <>
      <div
        className="row mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Product Checkout</h2>
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
            Product Details
          </a>
        </div>
      </div>
      <Row className="justify-content-around mt-4 py-4">
        <Col md={10} className="">
          <div
            className="px-5 py-1 fs-6"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            Returning Customer?
            <a href="" className="link-warning">
              Click here to login
            </a>
          </div>
          <p className="px-3 text-secondary small mt-4">
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
          <form action="">
            <Row>
              <Col md={4} className="mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="username or email*"
                />
              </Col>
              <Col md={4} className="mb-3 ms-2">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="password*"
                />
              </Col>
            </Row>
            <Col>
              <Button variant="warning" className="text-white mb-3 rounded-0 btn-inv">
                Send message
              </Button>
              <p>
                <a href="" className="link-warning">
                  Lost your password?
                </a>
              </p>
            </Col>
          </form>
        </Col>

        <Col md={10} className="">
          <div
            className="px-5 py-1 fs-6"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            Have a coupon?
            <a href="" className="link-warning">
              Click here to enter your code
            </a>
          </div>

          <form action="">
            <Row>
              <Col md={8} className="mb-3 ms-2">
                <input
                  required
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter coupon code*"
                />
              </Col>
            </Row>
            <Col>
              <Button
                variant="warning"
                className="text-white  rounded-0 mb-3 btn-inv"
              >
                Apply Coupon
              </Button>
              <p>
                <a href="" className="link-warning">
                  Lost your password?
                </a>
              </p>
            </Col>
          </form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-3">
        <Col md={7}>
          <form className="row">
            <div className="col-md-6 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="first"
                placeholder="Name"
              />
            </div>
            <div className="col-md-6 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="last"
                placeholder="Last name"
              />
            </div>
            <div className="col-md-12 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="company"
                name="company"
                placeholder="Company name"
              />
            </div>
            <div className="col-md-6 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="number"
                placeholder="Phone number"
              />
            </div>
            <div className="col-md-6 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="col-md-12 form-group mb-4">
              <select className="form-select">
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
                <option value="4">Country 3</option>
              </select>
            </div>
            <div className="col-md-12 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="add1"
                placeholder="Address line 01"
              />
            </div>
            <div className="col-md-12 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="add2"
                placeholder="Address line 02"
              />
            </div>
            <div className="col-md-12 form-group mb-4">
              <input
                required
                type="text"
                className="form-control"
                id="city"
                placeholder="city/town"
              />
            </div>
            <div className="col-md-12 form-group mb-4">
              <select className="form-select">
                <option value="1">District 1</option>
                <option value="2">District 2</option>
                <option value="4">District 3</option>
              </select>
            </div>
            <div className="col-md-12 form-group mb-3">
              <input
                required
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder="Postcode/ZIP"
              />
            </div>
            <div className="col-md-12 form-group">
              <div className="creat_account">
                <input
                  required
                  type="checkbox"
                  id="f-option2"
                  name="selector"
                />
                <label htmlFor="f-option2" className="text-secondary ms-2">
                  Create an account?
                </label>
              </div>
            </div>
            <div className="col-md-12 form-group mt-3">
              <div className="creat_account">
                <h5>
                  Shipping Details <hr />
                </h5>
                <input
                  required
                  type="checkbox"
                  id="f-option3"
                  name="selector"
                />
                <label htmlfor="f-option3" className="text-secondary ms-2">
                  Ship to a different address?
                </label>
              </div>
              <textarea
                className="form-control mt-4"
                name="message"
                id="message"
                rows="3"
                placeholder="Order Notes"
              ></textarea>
            </div>
          </form>
        </Col>
        <Col
          md={3}
          className="border py-4 "
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <h5>Yout order</h5>
          <table className="table table-secondary table-bordered text-secondary">
            <tr>
              <td className="py-2 px-4">Product</td>
              <td>Price</td>
            </tr>
            <tr>
              <td className="py-2 px-4 small">jeans</td>
              <td className="small">$24.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 small">smart watch</td>
              <td className="small">$20.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 small">Sneakers</td>
              <td className="small">$50.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-black fw-semibold text-uppercase">
                subtotal
              </td>
              <td className="">$94</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-black fw-semibold text-uppercase">
                shiping
              </td>
              <td>Flat Rate: $30</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-black fw-semibold text-uppercase">
                total
              </td>
              <td className="text-black fw-bold">$124</td>
            </tr>
          </table>

          <form action="">
            <div className="d-flex align-items-start flex-column">
              <div className="d-flex align-items-start">
                <input
                  type="radio"
                  className="form-check"
                  name="payment"
                  value="visa"
                />
                <p className="ms-1">Check Payments</p>
              </div>
              <div className="p-2 bg-white small text-secondary">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-start">
                  <input
                    type="radio"
                    className="form-check"
                    name="payment"
                    value="paypal"
                  />
                  <p className="ms-1 me-auto">Paypal</p>
                </div>

                <div className="float-end">
                  <img
                    src="./img/product-details/card.jpg"
                    className=""
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2 bg-white small text-warning">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </div>
            </div>
            <div className="d-flex align-items-start mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="payment"
                value="visa"
              />
              <p className="ms-1 small">
                I have read and accept the{" "}
                <span>
                  <a href="" className="link-warning">
                    terms and condations
                  </a>
                </span>{" "}
              </p>
            </div>
            <Button
              variant="warning"
              className="text-white mt-3 rounded-2 w-100 btn-inv">
                Proceed to Paypal
              </Button>
          </form>
        </Col>
      </Row>
    </>
  );
};
export default ProductCheckout;
