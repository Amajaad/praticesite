function banner() {
  return (
    <div className="row banner overflow-y-hidden mb-4">
      <div className="col-2 d-none d-md-block me-md-5"></div>
      <div className="col-md-4 col-12 ms-md-5 mt-md-5 mt-3">
        <p className="display-4 text-secondary px-5 fw-semibold">
          NEW ERA OF SMARTPHONES
        </p>
        <div className="mt-md-5 px-5">
          <div className="d-flex align-items-center gap-3 mt-3">
            <p className="text-decoration-line-through text-secondary fs-1 fw-semibold">
              530
            </p>
            <p className="text-success fw-semibold fs-3">460</p>
          </div>
          <p className="fw-semibold fs-5"> Apple Iphone 6s</p>
          <button className="btn btn-lg btn-primary opacity-75 mt-3">
            Shop Now
          </button>
        </div>
      </div>
      <div className="col-md-4 col-8 mt-md-5">
        <img src="img\banner_product.png.webp" className="img-fluid " alt="" />
      </div>
    </div>
  );
}
export default banner;
