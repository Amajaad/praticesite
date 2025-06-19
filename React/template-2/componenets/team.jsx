function team() {
  const style = {
    backgroundColor: "#a8d8da",
  };
  const titlestyle = {
    letterSpacing: "5px",
  };
  const imgpos ={
    postion : "relative",
    marginTop : "-40px"
  }
  return (
    <>
      <div className="row justify-content-center py-5">
        <p className="text-center display-4 fw-bold">Services</p>
        <p className="text-start fs-5 ps-5 fw-semibold">
          We offer support, visual & design strategies to our customers. Click
          to select the text box. Click again or double click to start editing <br />
          the text. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
      <div className="row justify-content-around mb-4">
        <div
          className="col-md-3 justify-content-center p-3 rounded-5"
          style={style}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="./img/adam.jpg"
              className="img-fluid rounded w-50"
              alt=""
              style={imgpos}
            />
          </div>

          <h5 className="text-center fw-bold fs-5">Adam Jonson</h5>
          <p className="text-center fs-4 fw-light" style={titlestyle}>
            Developer
          </p>
        </div>
        <div
          className="col-md-3 justify-content-center p-3 rounded-5"
          style={style}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="./img/linda.jpg"
              className="img-fluid rounded w-50"
              alt=""
              style={imgpos}
            />
          </div>

          <h5 className="text-center fw-bold fs-5">Linda Larson</h5>
          <p className="text-center fs-4 fw-light" style={titlestyle}>
          Manager   
          </p>
        </div>
        <div
          className="col-md-3 justify-content-center p-3 rounded-5"
          style={style}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="./img/mary.jpg"
              className="img-fluid rounded w-50 "
              alt=""
              style={imgpos}
            />
          </div>

          <h5 className="text-center fw-bold fs-5">Marry Hudson</h5>
          <p className="text-center fs-4 fw-light" style={titlestyle}>
          Designer 
          </p>
        </div>
      </div>
    </>
  );
}
export default team;
