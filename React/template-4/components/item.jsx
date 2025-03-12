// Item.js
import React from "react";
import { useCart } from "../components/cartcontext";

const Item = ({ name, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price });
  };

  return (
    <div className="item">
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
