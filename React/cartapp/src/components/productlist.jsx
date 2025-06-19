import { Row, Col } from "react-bootstrap";
import Productcard from "./productcard.jsx";

const productlist = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} md={4} className="mb-4">
          <Productcard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default productlist;
