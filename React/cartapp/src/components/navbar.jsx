import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/cartcontext";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar = () => {
  const { totalitems } = useContext(Cartcontext);
  return (
    <BootstrapNavbar
      expand="lg"
      className=" text-white shadow-sm fixed-top"
      style={{ background: "linear-gradient(to right, #343a40, #495057)" }}
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          className="fw-bold fs-3 text-light d-flex align-items-center justify-content-center gap-2"
        >
          Samsung Store
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" text-white"
        />

        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className=" justify-content-center "
        >
          <Nav className="ms-md-auto align-content-center text-center">
            <Nav.Link
              as={Link}
              to="/"
              className="text-light d-flex align-items-center px-3 gap-2"
            >
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/checkout"
              className="text-light d-flex align-items-center px-3 gap-2 position-relative"
            >
              <FaShoppingCart /> Checkout{" "}
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
