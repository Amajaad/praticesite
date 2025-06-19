import { Row, Col, Image, Button } from "react-bootstrap";
import { Cartcontext } from "../context/cartcontext.jsx";
import { useContext } from "react";
import Producttabs from "../components/product-details-tabs.jsx";
const productDetail = () => {
  const { addtocart } = useContext(Cartcontext);
  const product1 = {
    id: 1,
    name: "Faded SkyBlu Denim Jeans",
    price: 149.99,
    category: "HouseHold",
    image: "./img/product-details/s-product.jpg",
    description:
      "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.",
    availability: "in stock",
  };
  return (
    <>
      <div
        className="mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Product Details</h2>
          <p>Very us move be blessed multiply night</p>
        </div>
        <div className=" col-md-3 breadcrumb">
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="index.html"
          >
            Home
          </a>
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="category.html"
          >
            Product Details
          </a>
        </div>
      </div>
      <Row className="justify-content-around align-items-center mt-4 py-4">
        <Col md={5} className="text-center">
          <Image
            src={product1.image}
            alt="Product Image"
            fluid
            className="mb-4 h-100 w-100"
          />
        </Col>
        <Col md={5}>
          <h3>{product1.name}</h3>
          <p className="lead text-warning fs-3 fw-semibold">
            ${product1.price}
          </p>
          <p className="text-muted">Category :{product1.category}</p>
          <p className="text-muted">Availibility :{product1.availability}</p>

          <hr />
          <p className=" small text-success ">{product1.description}</p>
          <Button
            variant="warning"
            className="mt-4 rounded-pill fw-semibold d-flex align-content-center text-light shadow
             justify-content-center buy-btn"
            style={{ background: "linearGradient(145deg, #007bff, #0056b3)" }}
            onClick={() => addtocart(product1)}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center align-items-center mb-5">
        <Col md={9} className="border px-1">
          <Producttabs />
        </Col>
      </Row>
    </>
  );
};
export default productDetail;
