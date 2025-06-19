import React from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container-fluid py-5 checkout">
      <h3 className="text-center">Checkout</h3>
      {cart.length === 0 ? (
        <div className="d-flex justify-content-center">
            <div className="alert alert-danger w-50">Your cart is empty</div>
        </div>
      
      ) : (
        <>
          <div className="checkout-body">
            <div className="cart-items mb-3 ">
              {cart.map((item, index) => (
                <div key={index} className="cart-item card mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary card p-4 mb-4">
              <h4 className="mb-3">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="checkout-form card p-4">
              <h4 className="mb-3">Payment Information</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="card" className="form-label">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="card"
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="expiry" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="expiry"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      required = "true"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-warning text-white w-100 py-2"
                  onClick={() => {
                    alert("Order placed successfully!\n thank you for shoping");
                    clearCart();
                  }}
                >
                  Place Order (${totalPrice.toFixed(2)})
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
