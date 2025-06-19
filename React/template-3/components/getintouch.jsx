function getintouch() {
  const style = {
    backgroundColor: "#fb8705",
    height: "40vh",
  };
  return (
    <div
      className="row justify-content-around text-white align-items-center py-5"
      style={style}
    >
      <div className="col-md-5 display-5 fw-bold text-center">Get in Touch with Us</div>
      <div className="col-md-5">
        <div className="row justify-content-center gap-3">
          <div className="col-md-8 col-10">
            <input
              type="text "
              typeof="submit"
              className="form-control form-control-lg rounded-0 fs-6"
              placeholder="Enter a valid Email address"
            />
          </div>

          <div className="col-md-3 col-10">
            <button className="btn  btn-secondary px-3 fs-5 rounded-0 w-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default getintouch;
