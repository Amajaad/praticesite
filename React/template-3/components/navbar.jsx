function navbar() {
 
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark col-md-3 col-4"
          
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fw-bold fs-5 text-center">
                <li className="nav-item ">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default navbar;
