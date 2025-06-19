import { Cartcontext } from "../context/cartcontext.jsx";
import { useContext } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Productcard = ({ product }) => {
  const { addtocart } = useContext(Cartcontext);
  const renderstars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} size={20} />
    ));
  };
  return (
    <Card
      className="shadow product-card roudned-3 border-0 overflow-hidden possition-relative"
      style={{
      
        margin: "20px auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        background: "linear-gradient(to bottom right, #f8f9fa, #e9ecef)",
      }}
    >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="card-img-top img-fluid p-1"
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />

        <Badge
          className="position-absolute top-0 end-25 ms-2 start-0 me-2 rounded-pill shadow-sm mt-2 badge"
          bg="success"
        >
          20% off
        </Badge>

        <Badge
          bg="secondary"
          className="position-absolute top-0 end-0 me-1 rounded-pill shadow-sm mt-2 badge"
        >
          {product.price} USD
        </Badge>
      </div>
      <Card.Body className="text-center dflex flex-column align-items-center justify-content-between px-2 card-text-desc">
        <div className="">
          <Card.Title className="mb-1 fs-5 fw-bold text-dark">
            {product.name}
          </Card.Title>
          <Card.Text className=" mb-2">{product.description}</Card.Text>

          <div className=" text-danger text-muted mb-2 small">
            {parseFloat(product.price * 1).toFixed(2)} USD
          </div>

          <div className="text-decoration-line-through text-danger text-muted mb-2 small">
            {parseFloat(product.price * 1.2).toFixed(2)} USD
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-dark"
              className="mt-3 rounded-pill fw-semibold d-flex align-content-center
             justify-content-center buy-btn"
              style={{ background: "linearGradient(145deg, #007bff, #0056b3)" }}
              onClick={() => addtocart(product)}
            >
              <FaShoppingCart className="me-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Productcard;
