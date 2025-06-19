import { Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Blog_info from "../components/blog_info";
import { blogs } from "../components/blog_info";
const Blog = () => {
  const [searchblog, setSearchblog] = useState("");
  const Filteredblogs = blogs.filter((blog) =>
    blog.name.toLowerCase().includes(searchblog.toLowerCase())
  );
  return (
    <>
      <div
        className="row mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Blog</h2>
          <p>Very us move be blessed multiply night</p>
        </div>
        <div className=" col-md-3 breadcrumb">
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="index.html"
          >
            Home
          </a>
          <a
            className="breadcrumb-item link-dark text-decoration-none fw-semibold"
            href="category.html"
          >
            Blog
          </a>
        </div>
      </div>
      <Row className="justify-content-center mt-5 m-0">
        <Col md={7}>
          <Blog_info blogs={Filteredblogs} />
        </Col>
        <Col md={3}>
          <div className=" p-3" style={{ backgroundColor: "#fbf9ff" }}>
            <div className=" input-group">
              <input
                type="text"
                value={searchblog}
                onChange={(e) => setSearchblog(e.target.value)}
                className="form-control rounded-0 border-flush"
                placeholder="search for keywords"
              />
              <div className="input-group-text">
                <FaSearch />
              </div>
            </div>
          </div>
          <div
            className="mt-3 px-4 py-3   "
            style={{ backgroundColor: "#fbf9ff" }}
          >
            <h4>
              Category <hr />
            </h4>
            <div className="d-flex flex-column category-link small">
              <a href="">Resturant food(37)</a>
              <a href="">Travel News(11)</a>
              <a href="">Modern Texhnology(3)</a>
              <a href="">Product(27)</a>
              <a href="">Inspiration(21)</a>
              <a href="">Health Care(30)</a>
            </div>
          </div>
          <div
            className="mt-3 px-4 py-3   "
            style={{ backgroundColor: "#fbf9ff" }}
          >
            <h4>
              Recent Post <hr />
            </h4>
            <div className="d-flex flex-column post-link gap-3">
              <div className="d-flex align-items-center shadow-sm">
                <div className="">
                  <img
                    src="./img/blog-detials/post1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className=" ms-3 small">
                  <a href="">From life was you fish...</a>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="d-flex align-items-center shadow-sm">
                <div className="">
                  <img
                    src="./img/blog-detials/post2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className=" ms-3 small">
                  <a href="">The Amazing Hubble</a>
                  <p>2 Hours ago</p>
                </div>
              </div>
              <div className="d-flex align-items-center shadow-sm">
                <div className="">
                  <img
                    src="./img/blog-detials/post3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className=" ms-3 small">
                  <a href="">Astronomy Or Astrology</a>
                  <p>4 Hours ago</p>
                </div>
              </div>
              <div className="d-flex align-items-center shadow-sm">
                <div className="">
                  <img
                    src="./img/blog-detials/post4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className=" ms-3 small">
                  <a href="">Asteroids telescope</a>
                  <p>1 Hours ago</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-3 px-4 py-3   "
            style={{ backgroundColor: "#fbf9ff" }}
          >
            <h4>
              Tag Clouds <hr />
            </h4>
            <div className="d-flex flex-column py-4 gap-3">
              <div className="d-flex gap-2">
                <button className=" btn rounded-1 btn-outline-warning2">
                  Project
                </button>
                <button className=" btn rounded-1 btn-outline-warning2">
                  love
                </button>
                <button className=" btn rounded-1 btn-outline-warning2">
                  technology
                </button>
              </div>
              <div className="d-flex gap-2">
                <button className=" btn rounded-1 btn-outline-warning2">
                  travel
                </button>
                <button className=" btn rounded-1 btn-outline-warning2">
                  resturant
                </button>
                <button className=" btn rounded-1 btn-outline-warning2">
                  life style
                </button>
              </div>
              <div className="d-flex gap-2">
                <button className=" btn rounded-1 btn-outline-warning2">
                  design
                </button>
                <button className=" btn rounded-1 btn-outline-warning2">
                  illustration
                </button>
              </div>
            </div>
          </div>
          <div
            className="mt-3 px-3 py-3   "
            style={{ backgroundColor: "#fbf9ff" }}
          >
            <h4>
              Category <hr />
            </h4>
            <div className="row small">
              <div className="row justify-content-start gap-4 row-gap-2  ">
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i1.png" alt="" />
                </div>
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i2.png" alt="" />
                </div>
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i3.png" alt="" />
                </div>
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i4.png" alt="" />
                </div>
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i5.png" alt="" />
                </div>
                <div className="col-3 img-fluid">
                  <img src="img/blog-detials/widget-i6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" p-3" style={{ backgroundColor: "#fbf9ff" }}>
            <h4>Newsletter  <hr /></h4>
            <div className="">
              <input
                type="text"
                className="form-control rounded-0 border-flush"
                placeholder="Enter Email"
              />
        <button className="btn btn-warning w-100 mt-3 text-white btn-inv">Subscribe</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Blog;
