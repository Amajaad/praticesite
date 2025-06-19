function create() {
  return (
    <>
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 text-center mb-3">
          <img
            src="./img/woman.jpg"
            className="img-fluid h-100"
            width={340}
            alt=""
          />
        </div>
        <div className="col-md-5">
          <div className="d-flex align-items-start mb-5">
            <div className="bg-primary-subtle px-4 py-2 d-inline-block display-3 fw-bold text-white">
              01
            </div>
            <span className="ms-3">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </span>
          </div>
          <p className="fw-bold mt-5 mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="d-flex align-items-start mt-5">
            <div className="bg-primary-subtle px-4 py-2 d-inline-block display-3 fw-bold text-white">
              02
            </div>
            <span className="ms-3">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default create;
