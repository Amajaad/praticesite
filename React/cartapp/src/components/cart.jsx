import { useContext } from "react";
import { Cartcontext } from "../context/cartcontext.jsx";
import { Card, Button } from "react-bootstrap";
import Cartitem from "./cartitem.jsx";
import { Link } from "react-router-dom";
const cart = () => {
  const { cart, totalprice } = useContext(Cartcontext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your cart is empty</h2>
        <Link to="/">
          <Button className="btn btn-primary mt-3">Go to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
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
          <Link to="/checkout">
            <Button variant="success">Proceed to Checkout</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default cart;
