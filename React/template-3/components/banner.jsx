function banner() {
  const bg ={
    backgroundColor:"#f2f2f2",
  }
  return (
    <div className="row py-3 justify-content-between" style={bg}>
      <div className="col-md-5 mt-2 ms-md-5">
        <p className="fw-semibold text-uppercase fs-5">who are we</p>
        <h1 className="fw-bold display-2">Empowering Your Business Success</h1>
        <p className="fw-light text-secondary fs-5">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Image from
        </p>
        <button className="btn btn-dark bg-black text-uppercase px-5 py-2 rounded-0">
          free consultation
        </button>
      </div>
      <div className="col-md-6">
        <img src="./images/banner.jpg" className="img-fluid h-100 mt-3 ms-md-5" alt="" />
      </div>
    </div>
  );
}
export default banner;
