function nav() {
  return (
    <div className="navbar bg-body-tertiary position-sticky top-0 ">
      <a className="navbar-brand fs-2 fw-semibold text-secondary ms-5" href="#">
        logo
      </a>
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="ms-md-3 me-md-5 ms-1">
        <a href="">
          <i className="bi bi-facebook fs-3 text-primary"></i>
        </a>
        <a href="">
          <i className="bi bi-twitter fs-3 text-info ms-3"></i>
        </a>
        <a href="">
          <i className="bi bi-instagram text-primary fs-3 ms-3"></i>
        </a>
      </div>
      <div
        className="offcanvas offcanvas-start opacity-75 text-bg-dark"
        tabIndex={1}
        id="offcanvasNavbar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            className="btn-close text-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a
                className="nav-link active text-white fs-4"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nav;
