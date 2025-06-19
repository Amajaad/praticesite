import { Cartcontext } from "../context/cartcontext.jsx";
import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const newdealProducts = [
  {
    id: 1,
    collection: "collection of 2019",
    name: "Men’s summer t-shirt",
    image: "./img/home/new-product1.png",
    price: 125.0,
  },
];
const NewlimitedProduct = ({ products }) => {
  const { addtocart } = useContext(Cartcontext);

  return (
    <>
      {newdealProducts.map((product) => (
        <Col
          key={product.id}
          md={12}
          className="mb-4 px-4"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <Card
            className=" product-card rounded-3 border-0 overflow-hidden position-relative"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            <Card.Body className="">
              <Card.Title className="mb-1 fs-3 text-center fw-semibold text-secondary">
                {product.collection}
              </Card.Title>
              <Card.Title className="mb-1 fs-2 text-center fw-bold text-dark">
                {product.name}
              </Card.Title>

              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid p-1"
                style={{ width: "100%", height: "350px", objectFit: "contain" }}
              />
              <Card.Text className="text-secondary fs-3 mb-2 text-center">
                ${product.price.toFixed(2)}
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  onClick={() => addtocart(product)}
                  className="d-flex align-items-center btn-inv1 justify-content-center"
                >
                  <FaShoppingCart className="me-2" /> Add to cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default NewlimitedProduct;
