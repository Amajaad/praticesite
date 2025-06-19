import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/cartcontext";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Badge,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const { totalitems } = useContext(Cartcontext);
  return (
    <BootstrapNavbar
      expand="lg"
      className="shadow-sm fixed-top"
      style={{
        background:
          "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))",
      }}
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          className="fw-bold fs-3  d-flex align-items-center justify-content-center "
        >
          <img src="img/logo.png" alt="" />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-black"
        />

        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className=" justify-content-center "
        >
          <Nav className=" align-content-center  text-center nav-links">
            <Nav.Link
              as={Link}
              to="/"
              className=" d-flex align-items-center gap-2 nav-link"
            >
             Home
            </Nav.Link>
            <Dropdown
              className=""
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
              show={shopOpen}
            >
              <Dropdown.Toggle
                variant="link"
                color="success"
                className="text-dark d-flex align-items-center gap-2 text-decoration-none nav-link"
              >
                Shop
              </Dropdown.Toggle>
              <Dropdown.Menu className="rounded-0 dd-menu ">
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="category"
                >
                  shop category
                </Dropdown.Item>
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="product-details"
                >
                  product details
                </Dropdown.Item>
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="product-checkout"
                >
                  product checkout
                </Dropdown.Item>
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="shoping-cart"
                >
                  shoping cart
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              className=""
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
              show={blogOpen}
            >
              <Dropdown.Toggle
                variant="link"
                color="success"
                className="text-dark d-flex align-items-center gap-2 text-decoration-none nav-link "
              >
                Blog
              </Dropdown.Toggle>
              <Dropdown.Menu className="rounded-0 dd-menu ">
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="blog"
                >
                  Blog
                </Dropdown.Item>
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="blog-details"
                >
                  Blog details
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              className=""
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
              show={pagesOpen}
            >
              <Dropdown.Toggle
                variant="link"
                color="success"
                className="text-dark d-flex align-items-center gap-2 text-decoration-none nav-link"
              >
                Pages
              </Dropdown.Toggle>
              <Dropdown.Menu className="rounded-0 dd-menu">
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="product-tracking"
                >
                  Tracking
                </Dropdown.Item>
                <Dropdown.Item
                  className="shoping-link pe-5"
                  as={Link}
                  to="Elementspage"
                >
                  Elements
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/contact" className=" gap-2">
              contact
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/checkout"
              className="text-dark d-flex align-items-center gap-2 clearfix position-relative start-50"
            >
              <FaShoppingCart />
              {totalitems > 0 && (
                <Badge
                  bg="success"
                  className="small position-absolute top-0  rounded-circle start-100 translate-middle"
                >
                  {totalitems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
