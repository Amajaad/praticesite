import Productlist from "../components/productlist";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "samsung galaxy a16",
    description: "a low-end smartphone",
    price: 4241,
    image: "./img/galaxy-a16.webp",
    rating: 3.5,
  },
  {
    id: 2,
    name: "samsung galaxy a36",
    description: "a mid-end smartphone",
    price: 5274,
    image: "./img/galaxy-a36.webp",
    rating: 4.0,
  },
  {
    id: 3,
    name: "samsung galaxy a56",
    description: "a high-end smartphone",
    price: 6732,
    image: "./img/galaxy-a56.webp",
    rating: 4.8,
  },
];
const home = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="container-fluid mt-4">
      <div className=" d-flex flex-column align-items-center justify-content-center">
        <h2 className="display-6 fw-semibold fst-italic">Our Products</h2>
        <div className="mb-4 justify-content-center col-5">
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className="form-control"
            placeholder="Search for products..."
          />
        </div>

        {filteredProducts.length > 0 ? (
          <Productlist products={filteredProducts} />
        ) : (
          <div className="text-center mt-5">
            <h3>this product wasn't found</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default home;
