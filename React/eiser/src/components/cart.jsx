import { useContext } from "react";
import { Cartcontext } from "../context/cartcontext.jsx";
import { Card, Button } from "react-bootstrap";
import Cartitem from "./cartitem.jsx";
import { Link } from "react-router-dom";
const cart = () => {
  const { cart, totalprice } = useContext(Cartcontext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5 mb-5">
        <h2>Your cart is empty</h2>
        <Link to="/category">
          <Button className="btn btn-primary mt-3">Go to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h3>Shoping Cart</h3>
      {cart.map((item) => (
        <Cartitem key={item.id} item={item} />
      ))}

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Total Price</Card.Title>
          <Card.Text className="fs-4 fw-bold">
            {totalprice.toFixed(2)} USD
          </Card.Text>
          <Link to="/product-checkout">
            <Button variant="warning" className="btn-inv1">
              Proceed to Checkout
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default cart;
