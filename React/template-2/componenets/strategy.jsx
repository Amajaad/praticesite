function strategy() {
  const background = {
    backgroundImage: "url(./img/bgimg4.jpg)",
    backgroundSize: "100% 100%",
  };
  const cube = {
    width: 100,
    height: 100,
  };

  return (
    <>
      <div className="row justify-content-center py-5" style={background}>
        <p className="display-4 fw-bold text-center">Winning Strategies</p>
        <p className="text-center fs-5 ">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <div className=" col-md-10" >
          <img
            src="./img/strategy.jpg"
            className="img-fluid card-img mt-3"
            alt=""
          />
          <div className="card-card-img-bottom">
            <div className="row justify-content-center gap-3 mt-3">
              <div className="col-md-3 card p-3 bg-white">
                <div
                  className="bg-primary-subtle rounded text-center display-3 fw-bold text-white"
                  style={cube}
                >
                  01
                </div>
                <p className="fs-6 mt-4">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a href="" className="text-black fs-5">
                  More
                </a>
              </div>
              <div className="col-md-3 card p-3 bg-white">
                <div
                  className="bg-primary-subtle rounded text-center display-3 fw-bold text-white"
                  style={cube}
                >
                  02
                </div>
                <p className="fs-6 mt-4">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a href="" className="text-black fs-5">
                  More
                </a>
              </div>
              <div className="col-md-3 card p-3 bg-white">
                <div
                  className="bg-primary-subtle rounded text-center display-3 fw-bold text-white"
                  style={cube}
                >
                  03
                </div>
                <p className="fs-6 mt-4">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a href="" className="text-black fs-5">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default strategy;
