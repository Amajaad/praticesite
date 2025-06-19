import { useState } from "react";
import Item from "../cart_componenets/item";
function FruitsVegetables() {
  const [activeTab, setActiveTab] = useState("All");

  // Product data with images
  const products = [
    {
      id: 1,
      category: "Top featured",
      tag: "SALE",
      name: "carrot",
      price: 7.79,
      image: "images/img-pro-01.jpg", // Add image path for each product
    },
    {
      id: 2,
      category: "Top featured",
      tag: "NEW",
      name: "tomato",
      price: 9.79,
      image: "images/img-pro-02.jpg",
    },
    {
      id: 3,
      category: "Best seller",
      tag: "SALE",
      name: "Grape",
      price: 10.79,
      image: "images/img-pro-03.jpg",
    },
    {
      id: 4,
      category: "Best seller",
      tag: "SALE",
      name: "Mango",
      price: 15.79,
      image: "images/img-pro-04.jpg",
    },
  ];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="fruits-vegetables-section">
      <h2>Fruits & Vegetables</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Category tabs */}
        <div className="tabs d-flex gap-3 justify-content-center">
          {["All", "Top featured", "Best seller"].map((tab) => (
            <button
          key={tab}
          className={`tab btn mb-3 text-white rounded-0 ${
            activeTab === tab ? "btn-dark bg-black" : "btn-warning"
          }`}
          onClick={() => setActiveTab(tab)}
            >
          {tab}
            </button>
          ))}
        </div>

        {/* Product grid with images */}
      <div className="product-grid d-flex row justify-content-center gap-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card card col-md-2 col-9">
            {/* Product image container */}
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image img-fluid card-img shop-img rounded-0"
              />
              <div className="card-img-overlay justify-content-center align-items-center">
                <Item price={product.price} name={product.name} />
              </div>
              {product.tag && <span className="tag">{product.tag}</span>}
            </div>
            <h6>{product.name}</h6>
            <p className="price p-2 text-white fw-semibold bg-warning d-inline-block">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FruitsVegetables;
