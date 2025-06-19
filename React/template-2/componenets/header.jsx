function navbar() {
  return (
    <>
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand ms-md-5" href="#">
           <img src="./img/logo.png" className="img-fluid w-75" alt="" />
          </a>
          <button
            class="navbar-toggler border border-0 me-md-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
          
              <button
                type="button"
                class="btn-close text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                <li class="nav-item">
                  <a class="nav-link active text-white fs-4" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white fs-4" href="#">
                    Page 3
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white fs-4" href="#">
                    Page 5
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
