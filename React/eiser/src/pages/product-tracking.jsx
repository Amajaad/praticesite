const ProductTracking = () => {
  return (
    <>
      <div
        className="row mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Product Tracking</h2>
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
            Product Tracking
          </a>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <h6 className="px-5 mt-5 mb-3">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </h6>
        <div className="col-md-5 px-5 mb-4  ">
          <form className="d-flex flex-column gap-4">
            <input
              type="text"
              className="form-control me-2 rounded-0 d-block"
              placeholder="Order ID"
              aria-label="Order ID"
            />
            <input
              type="text"
              className="form-control me-2 rounded-0 d-block"
              placeholder="Billing Email Address"
              aria-label="Order ID"
            />
            <button className="btn btn-warning col-4 text-white rounded-0" type="submit">
              Track Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ProductTracking;
