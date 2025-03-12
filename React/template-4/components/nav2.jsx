function navpc() {
  const height = {
    height: "100vh",
    overflowY: "auto",
  };
  return (
    <nav class="navbar navbar-expand-lg  d-none d-md-flex shadow">
      <div class="container-fluid">
        <div class="navbar-brand w-25" href="#">
          <div class="dropdown-center">
            <button
              class="btn btn-primary dropdown-toggle w-100 rounded-0 py-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-list me-2"></i>
              Categories
            </button>
            <ul class="dropdown-menu rounded-0 d-block w-100">
              <li>
                <a class="dropdown-item" href="#">
                  Computers & Laptops
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Cameras & Photos
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Smartphones & Tablets
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  TV & Audio
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Gadgets
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Car Electronics
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Video Games & Consoles
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto fs-5 gap-2">
            <li class="nav-item">
              <a
                class="nav-link active link-secondary"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle link-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Super Deals
              </a>
              <ul class="dropdown-menu fs-6">
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle link-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Featured Brands
              </a>
              <ul class="dropdown-menu fs-6">
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle link-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul class="dropdown-menu fs-6">
                <li>
                  <a class="dropdown-item" href="#">
                    Shop
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Product
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Blog Post
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Regular Post
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cart
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default navpc;
