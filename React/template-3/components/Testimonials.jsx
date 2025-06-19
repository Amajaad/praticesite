function testimonials() {
    const size={
        width:"300px",
        height:"95px",
    }
  return (
    <>
      <div className="row text-bg-dark py-5 black justify-content-center">
        <div className="col-md-5 col-10">
          <p className="fw-semibold fs-5 text-uppercase">Testimonials</p>
          <h1 className="display-5 fw-bold">
            What Our Clients <br /> Are Saying
          </h1>
        </div>
        <div className="col-md-5 col-10">
          <p className="fw-semibold mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      <div className="row text-bg-dark py-5 black justify-content-center gap-3">
        <div className="col-md-5 col-10">
          <div className="card border-0">
            <div className="card-body gray  p-4">
              <div className="row d-flex text-white align-items-center ">
                <div className="col-md-3 col-5 ms-0 ms-md-3 mb-4 mb-md-0">
                  <img
                    src="./images/emma.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-8  fs-6 fw-bold">
                  <p>Emma Harrison</p>
                  <p className="mt-4">Senior Strategy Consultant</p>
                </div>
                <div className="col-md-12 mt-3 ms-0 ms-md-2 fs-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10">
          <div className="card border-0">
            <div className="card-body gray  p-4">
              <div className="row d-flex text-white align-items-center ">
                <div className="col-md-3 col-5 ms-0 ms-md-3 mb-4 mb-md-0">
                  <img
                    src="./images/dan.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-8  fs-6 fw-bold">
                  <p>Daniel Foster</p>
                  <p className="mt-4">Financial Advisory Manager</p>
                </div>
                <div className="col-md-12 mt-3 ms-0 ms-md-2 fs-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10">
          <div className="card border-0">
            <div className="card-body gray  p-4">
              <div className="row d-flex text-white align-items-center ">
                <div className="col-md-3 col-5 ms-0 ms-md-3 mb-4 mb-md-0">
                  <img
                    src="./images/olive.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-8  fs-6 fw-bold">
                  <p>Olivia Bennett</p>
                  <p className="mt-4">Operations Analyst</p>
                </div>
                <div className="col-md-12 mt-3 ms-0 ms-md-2 fs-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10">
          <div className="card border-0">
            <div className="card-body gray  p-4">
              <div className="row d-flex text-white align-items-center ">
                <div className="col-md-3 col-5 ms-0 ms-md-3 mb-4 mb-md-0">
                  <img
                    src="./images/mike.jpg"
                    className="img-fluid rounded-circle"
style={size}
                    alt=""
                  />
                </div>
                <div className="col-8  fs-6 fw-bold">
                  <p>Michael Turner</p>
                  <p className="mt-4">Business Development Director</p>
                </div>
                <div className="col-md-12 mt-3 ms-0 ms-md-2 fs-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default testimonials;
