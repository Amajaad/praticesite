import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {
  FaUser,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaWikipediaW,
  FaDribbble,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
export const blogs2 = [
  {
    id: 1,
    name: "Second divided from form fish beast made every of seas all gathered us saying he our",

    image: "./img/blog-detials/m-blog-1.jpg",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower" +
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually",
    tags: "Travel, Lifestyle",
  },
];
const Blogdetails = ({ blogs }) => {
  return (
    <>
      <div
        className="row mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Blog Details</h2>
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
            Blog Details
          </a>
        </div>
      </div>
      <Row className="justify-content-center mt-5 m-0 mb-4">
        <Col md={7}>
          {blogs2.map((blog) => (
            <Card key={blog.id} className="bg-light shadow shadow-sm mb-5">
              <Card.Img src={blog.image} className="img-fluid" />

              <Card.Body>
                <div className="text-bg-warning small px-4 py-1 rounded text-white text-center d-block d-md-none">
                  <h3>{blog.date}</h3>
                  <p>{blog.month}</p>
                </div>
                <div className="fw-semibold fs-5 mt-3">{blog.name}</div>
                <div className="d-md-flex mt-md-4 mt-2 mb-3">
                  <div className="text-secondary small d-flex align-items-center">
                    <FaUser className="me-2" />
                    {blog.tags}
                  </div>
                  <div className="border-start border-3 border-dark-subtle ms-2 me-2"></div>
                  <div className="text-secondary small d-flex align-items-center">
                    <FaComments className="me-2" />3 comments
                  </div>
                </div>
                <small className="text-secondary">{blog.description}</small>
                <div
                  className="px-5 py-3 mt-4 mb-3"
                  style={{ backgroundColor: "#fbf9ff" }}
                >
                  <div className=" border border-top-0 border-bottom-0 border-end-0 border-start-5 border-warning py-4">
                    <p className="small text-secondary px-4">
                      {blog.description}
                    </p>
                  </div>
                </div>
                <small className="text-secondary">{blog.description}</small>
                <hr />
                <div className="d-md-flex mt-md-4 mt-2 mb-3 justify-content-between">
                  <div className="text-secondary small d-flex align-items-center">
                    <FaUser className="me-2" />
                    {blog.tags}
                  </div>

                  <div className="text-secondary small d-flex align-items-center">
                    <FaComments className="me-2" />3 comments
                  </div>
                  <div className="text-secondary small d-flex align-items-center">
                    <a href="" className="text-secondary me-2">
                      <FaFacebookF />
                    </a>
                    <a href="" className="text-secondary me-2 small">
                      <FaTwitter />
                    </a>
                    <a href="" className="text-secondary me-2 small">
                      <FaDribbble />
                    </a>
                    <a href="" className="text-secondary me-2 small">
                      <FaWikipediaW />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
          <Row className="justify-content-between">
            <Col md={5}>
              <a className="d-flex text-decoration-none text-dark cursor-pointer post">
                <div
                  className="d-flex align-items-center justify-content-center post-img"
                  style={{
                    backgroundImage: "url(./img/blog-detials/prev.jpg)",
                    width: "60px",
                    height: "60px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="">
                    <FaArrowLeft className="post-arrow" />
                  </div>
                </div>

                <div className="ms-2">
                  <small className="text-secondary">prev post</small>
                  <h6>Space The Final Frontier</h6>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a className="d-flex text-decoration-none float-end text-dark cursor-pointer post">
                <div className="me-2">
                  <small className="text-secondary">prev post</small>
                  <h6>Space The Final Frontier</h6>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center post-img"
                  style={{
                    backgroundImage: "url(./img/blog-detials/next.jpg)",
                    width: "60px",
                    height: "60px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="">
                    <FaArrowRight className="post-arrow" />
                  </div>
                </div>
              </a>
            </Col>
          </Row>
          <hr />
          <div
            className="row justify-content-center align-items-center px-4 py-4"
            style={{ backgroundColor: "#fbf9ff" }}
          >
            <div className="col-2">
              <img
                src="img/blog-detials/author.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-9">
              <p className="fs-6 ms-4 fw-semibold">
                Harvard milan <br />
                <small className="text-secondary">
                  Second divided from form fish beast made. Every of seas all
                  gathered use saying you're, he our dominion twon Second
                  divided from
                </small>
              </p>
            </div>
          </div>
          <hr />
          <div className="">
            <h5>5 Comments</h5>
            <div className="row justify-content-center align-items-center">
              <div className="col-2">
                <img
                  src="./img/blog-detials/c1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-9">
                <small className="text-secondary">
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </small>
                <div className="d-flex mt-2 align-items-start">
                  <h5>Emilly Blunt</h5>
                  <p className="ms-2 small text-secondary">
                    December 4, 2017 at 3:12 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-3">
              <div className="col-2">
                <img
                  src="./img/blog-detials/c2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-9">
                <small className="text-secondary">
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </small>
                <div className="d-flex mt-2 align-items-start">
                  <h5>Emilly Blunt</h5>
                  <p className="ms-2 small text-secondary">
                    December 10, 2017 at 4:32 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-3">
              <div className="col-2">
                <img
                  src="./img/blog-detials/c3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-9">
                <small className="text-secondary">
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </small>
                <div className="d-flex mt-2 align-items-start">
                  <h5>Emilly Blunt</h5>
                  <p className="ms-2 small text-secondary">
                    December 2, 2017 at 3:00 am
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className=" p-3" style={{ backgroundColor: "#fbf9ff" }}>
            <div className=" input-group">
              <input
                type="text"
                className="form-control rounded-0 border-flush"
                placeholder="search for keywords"
              />
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
            <h4>
              Newsletter <hr />
            </h4>
            <div className="">
              <input
                type="text"
                className="form-control rounded-0 border-flush"
                placeholder="Enter Email"
              />
              <button className="btn btn-warning w-100 mt-3 text-white btn-inv">
                Subscribe
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Blogdetails;
