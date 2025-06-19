function banner() {
  const bannerStyle = {
    backgroundImage: "url(./img/bgimg2.png)",
    backgroundSize: "100% 120%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: "88vh",
  };
  return (
    <>
      <div className="container-fluid" style={bannerStyle}>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <img
              src="./img/solution.jpg"
              className="img-fluid mt-5 rounded-circle border border-5 border-white"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p className="display-3 text-black fw-bold mt-5">
              Digital Solutions provider for your brands
            </p>
            <hr className="py-2 bg-primary" />
            <button className="text-uppercase btn bg-black text-white p-3 rounded-0 px-5 py-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default banner;
