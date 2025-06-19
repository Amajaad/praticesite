import {
  FaSackDollar,
  FaTruck,
  FaHeadphones,
  FaBitcoin,
  FaArrowRight,
  FaCommentDots,
} from "react-icons/fa6";
import InspiredProductList from "../components/inspired-product-list.jsx";
import FeaturedProductList from "../components/featured-products.jsx";
import NewProductList from "../components/new-products.jsx";
import NewlimitedProduct from "../components/limited-product.jsx";
const home = () => {
  return (
    <>
      {/* banner */}
      <div className="home-banner row justify-content-around mt-5 m-0 py-5">
        <div className="col-md-5 text-start d-flex flex-column">
          <small className="text-white fw-semibold fs-5">Men Collection</small>
          <div className="display-4 fw-bold mb-2 text-start">
            <span className="display-4 fw-semibold text-warning">Show</span>{" "}
            your <br /> Personal{" "}
            <span className="text-warning display-4 fw-semibold"> Style</span>
          </div>
          <div className="fw-semibold text-white mb-2">
            Fowl saw dry which a above together place.
          </div>
          <div className="">
            <button className="btn btn-inv1 py-2 px-4 fw-semibold">
              view collection
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      {/* sevices */}
      <div className="d-flex justify-content-evenly align-items-center mt-5">
        <div className="card border-info col-2 px-4 py-2">
          <div className="text-center">
            <FaSackDollar className="text-dark fs-2 mt-3" />
            <h6 className="mt-3 fw-medium">Money back gurantee</h6>
            <small className="text-secondary">Shall open divide a one</small>
          </div>
        </div>
        <div className="card border-info col-2 px-4 py-2">
          <div className="text-center">
            <FaTruck className="text-dark fs-2 mt-3" />
            <h6 className="mt-3 fw-medium">Free Delivery</h6>
            <small className="text-secondary">Shall open divide a one</small>
          </div>
        </div>
        <div className="card border-info col-2 px-4 py-2">
          <div className="text-center">
            <FaHeadphones className="text-dark fs-2 mt-3" />
            <h6 className="mt-3 fw-medium">Always Support</h6>
            <small className="text-secondary">Shall open divide a one</small>
          </div>
        </div>
        <div className="card border-info col-2 px-4 py-2">
          <div className="text-center">
            <FaBitcoin className="text-dark fs-2 mt-3" />
            <h6 className="mt-3 fw-medium">Secure Payment</h6>
            <small className="text-secondary">Shall open divide a one</small>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <FeaturedProductList />
      </div>
      {/* limited offer */}
      <div className="limited-offer row justify-content-center mt-5 m-0 py-5">
        <div className="col-4"></div>
        <div className="col-md-5 text-center d-flex flex-column">
          <small className="text-black fs-4 text-uppercase">
            ALL Men's Collection
          </small>
          <div className="display-1 fw-bold text-black mb-2 text-center">
            50% Off{" "}
          </div>

          <div className="">
            <button className="btn btn-inv1 py-2 px-4 fw-semibold">
              Discover Now
            </button>
            <p className="text-secondary mt-3">limited time offer</p>
          </div>
        </div>
      </div>
      {/* New Products */}
      <div className="row py-5 d-flex justify-content-center m-0">
        <div className="col-12">
          <h3 className="text-center mb-4">New Products</h3>
          <div className="border-bottom w-50 text-center mb-3"></div>
          <p className="small text-secondary text-center">
            Bring called seed first of third give itself now ment
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: "#f6f6f6" }}>
          <NewlimitedProduct />
        </div>
        <div className="col-md-5">
          <div className="row">
            <NewProductList />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <InspiredProductList />
      </div>
      {/* latest blog */}
      <div className="row justify-content-around mt-3 py-4 me-0">
        <div className="col-md-3 card border-0 home-blog">
          <div className="card-img ">
            <img
              src="./img/home/b1.jpg"
              alt=""
              className="img-fluid  blog-img"
            />
          </div>

          <div className="card-body blogs-link">
            <div className="d-flex text-secondary small mb-2">
              <div className="">By Admin</div>
              <div className="ms-4">
                <FaCommentDots className="ms-2" />
                <span className="ms-1">2 Comments</span>
              </div>
            </div>
            <a
              href=""
              className="text-decoration-none text-dark fs-6 fw-semibold stretched-link"
            >
              Ford clever bed stops your sleeping partner hogging the whole{" "}
              <br />
            </a>
            <p className="text-secondary small mt-3 mb-3">
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <a href="" className="small text-decoration-none text-dark">
              Learn more <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
        <div className="col-md-3 card border-0 home-blog">
          <div className="card-img ">
            <img
              src="./img/home/b2.jpg"
              alt=""
              className="img-fluid blog-img"
            />
          </div>

          <div className="card-body blogs-link">
            <div className="d-flex text-secondary small mb-2">
              <div className="">By Admin</div>
              <div className="ms-4">
                <FaCommentDots className="ms-2" />
                <span className="ms-1">5 Comments</span>
              </div>
            </div>
            <a
              href=""
              className="text-decoration-none text-dark fs-6 fw-semibold stretched-link"
            >
              Ford clever bed stops your sleeping partner hogging the whole{" "}
              <br />
            </a>
            <p className="text-secondary small mt-3 mb-3">
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <a href="" className="small text-decoration-none text-dark">
              Learn more <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
        <div className="col-md-3 card border-0 home-blog">
          <div className="card-img ">
            <img
              src="./img/home/b3.jpg"
              alt=""
              className="img-fluid blog-img"
            />
          </div>

          <div className="card-body blogs-link">
            <div className="d-flex text-secondary small mb-2">
              <div className="">By Admin</div>
              <div className="ms-4">
                <FaCommentDots className="ms-2" />
                <span className="ms-1">8 Comments</span>
              </div>
            </div>
            <a
              href=""
              className="text-decoration-none text-dark fs-6 fw-semibold stretched-link"
            >
              Ford clever bed stops your sleeping partner hogging the whole{" "}
              <br />
            </a>
            <p className="text-secondary small mt-3 mb-3">
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <a href="" className="small text-decoration-none text-dark">
              Learn more <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default home;
