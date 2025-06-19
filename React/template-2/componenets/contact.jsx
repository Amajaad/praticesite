function contact() {
  const bgcolor = {
    backgroundColor: "#e5e5e5",
  };
  const iconcolor = {
    color: "#a8d8da",
  };
  const formstyle = {
    backgroundColor: "#a8d8da",
  };
  return (
    <>
      <div className="row justify-content-center py-3" style={bgcolor}>
        <div className="col-md-5 gap-3">
          <div className="row gap-4">
            <div className="col-md-5 text-center bg-white d-inline-block py-5 px-4">
              <i class="bi bi-geo-alt-fill display-1" style={iconcolor}></i>
              <h2 className="fs-6 text-uppercase fw-bold mt-3">
                Our Main Office
              </h2>
              <p>SoHo 94 Broadway St New York, NY 1001</p>
            </div>
            <div className="col-md-5 text-center bg-white d-inline-block py-5 px-4">
              <i class="bi bi-telephone-fill display-1" style={iconcolor}></i>
              <h2 className="fs-6 text-uppercase fw-bold mt-3">phone number</h2>
              <p>234-9876-5400 888-0123-4567 (Toll Free)</p>
            </div>
            <div className="col-md-5 text-center bg-white d-inline-block py-5 px-4">
              <i class="bi bi-printer-fill display-1" style={iconcolor}></i>
              <h2 className="fs-6 text-uppercase fw-bold mt-3">fax</h2>
              <p>1-234-567-8900 </p>
            </div>
            <div className="col-md-5 text-center bg-white d-inline-block py-5 px-4">
              <i class="bi bi-envelope-fill display-1" style={iconcolor}></i>
              <h2 className="fs-6 text-uppercase fw-bold mt-3">email</h2>
              <p>
                <a href="" className="text-dark">
                  hello@theme.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-5" style={formstyle}>
          <div className="">
            <h2 className="text-center display-5 fw-bold">Contact Us</h2>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3 rounded-0"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-3 rounded-0"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control rounded-0 mb-3"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark rounded-0 fs-5 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default contact;
