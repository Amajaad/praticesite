import { Cartcontext } from "../context/cartcontext.jsx";
import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const newProducts = [
  {
    id: 1,
    name: "Latest men sneakers",
    image: "./img/home/n1.jpg",
    price: 25.0,
  },
  {
    id: 2,
    name: "women red purse",
    image: "./img/home/n2.jpg",
    price: 15.0,
  },
  {
    id: 3,
    name: "Latest men smartwatch",
    image: "./img/home/n3.jpg",
    price: 10.0,
  },
  {
    id: 4,
    name: "Latest men smartwatch",
    image: "./img/home/n4.jpg",
    price: 10.0,
  },
];
const NewProductList = ({ products }) => {
  const { addtocart } = useContext(Cartcontext);

  return (
    <>
      {newProducts.map((product) => (
        <Col key={product.id} md={6} className="mb-4 px-3">
          <Card className="shadow product-card rounded-3 border-0 overflow-hidden position-relative">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="card-img-top img-fluid p-1"
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <Card.Body className="text-start d-flex justify-content-between">
              <div className="">
                <Card.Title className="mb-1 fs-6 fw-bold text-dark">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-muted mb-2">
                  ${product.price.toFixed(2)}
                </Card.Text>
              </div>
              <div className="">
                <Button
                  variant="outline-dark"
                  onClick={() => addtocart(product)}
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaShoppingCart className="" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default NewProductList;
