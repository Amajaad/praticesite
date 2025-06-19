// Item.js
import React from "react";
import { useCart } from "./CartContext";

const Item = ({ name, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price });
  };

  return (
      <button
        className="btn btn-warning text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    
  );
};

export default Item;
