

function header() {
  const bgcolor1 = { backgroundColor: "#fafafa" };

  return (
    <>
      <div
        className="d-md-flex justify-content-around py-2 gap-2 d-none"
        style={bgcolor1}
      >
        <div className="d-flex gap-3">
          <div className="d-flex">
            <span className="fs-3">
              <i class="bi bi-phone "></i>
            </span>
            <p className="fs-5 mt-1">+38 068 005 3570</p>
          </div>
          <div className="d-flex">
            <span className="fs-3">
              <i class="bi bi-envelope me-2"></i>
            </span>
            <p className="fs-5 mt-1">
              <a href="" className="link-secondary text-decoration-none">
                fastsales@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="hover-select mt-2">
            <select name="" className="form-select border-0" style={bgcolor1} id="">
              <option value="">English</option>
              <option value="">italian</option>
              <option value="">spanish</option>
              <option value="">japanese </option>
            </select>
          </div>
          <div className="hover-select mt-2 ms-2">
            <select name="" className="form-select  border-0" style={bgcolor1} id="">
              <option value="">US dollar</option>
              <option value="">EUR Euro</option>
              <option value="">GPD British Pound</option>
              <option value="">JPY Japanese Yen </option>
            </select>
          </div>
          <div className="d-flex ms-3 mt-1 align-items-center">
            <span className="border-end pe-2">
              <img
                src="img/user.svg"
                width={20}
                className="img-fluid "
                alt=""
              />
              <a href="" className="text-decoration-none link-secondary ms-2">
                Register
              </a>
            </span>
            <a href="" className="ms-2 text-decoration-none link-secondary">
              Sign in
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
