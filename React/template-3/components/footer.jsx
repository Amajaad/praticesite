function footer() {
  return (
    <>
      <div className="row justify-content-center py-4 gray text-white mt-4 footer ">
        <div className="col-md-5 col-10">
          <img src="./images/footer.jpg" className="img-fluid h-100 " alt="" />
        </div>
        <div className="col-md-5 col-10 mt-4 mt-md-0">
          <div className="orange text-white fs-5 d-inline py-2 px-4">
            Let's connect
          </div>
          <h1 className="display-5 fw-bold mt-3">We’re here to help</h1>
          <form action="" className="d-flex flex-column gap-3 ">
            <input
              type="text"
              className="form-control rounded-0 py-2"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              className="form-control rounded-0 py-2"
              placeholder="Enter a Valid Email Address"
            />
            <textarea
              className="form-control py-1 rounded-0 mb-3"
              placeholder="Enter Your Message"
              rows="5"
            ></textarea>
          </form>
          <button className="btn btn-warning text-white fw-semibold rounded-0 px-4 py-2 text-uppercase ">
            Submit
          </button>
        </div>
      </div>
      <div className="row justify-content-center fw-semibold text-bg-dark footer py-4">
    <div className="text-center">
    This site was created with the <span><a href="" className="footer-link">Nicepage</a></span>
    </div>
      </div>
    </>
  );
}
export default footer;
