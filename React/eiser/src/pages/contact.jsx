import { Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaHouse, FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div
        className="row mt-5 d-md-flex justify-content-around align-items-center m-0 py-4"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className=" col-md-5 mb-3 mt-4 mb-md-0">
          <h2>Contact</h2>
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
            Contact
          </a>
        </div>
      </div>
      <Row className="justify-content-center mt-4 py-md-4 mb-4">
        <Col md={10} className="fs-3 fw-semibold mb-4">Get in Touch</Col>
        <Col md={5}>
          <form action="" className="contact-form">
            <textarea
              rows={7}
              className="form-control"
              placeholder="Enter Message"
            ></textarea>

            <Row>
              <Col md={6}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control mt-3"
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control mt-3"
                />
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter Subject"
                />
              </Col>
            </Row>
            <Col className="d-flex justify-content-start">
              <Button
                variant="warning"
                className="mt-3 text-white rounded-2 "
                type="submit"
              >
                <small> Send Message</small>
              </Button>
            </Col>
          </form>
        </Col>
        <Col md={5}>
          <div className="d-flex gap-3 align-items-center">
            <div className="">
              <FaHouse className="fs-2 text-dark" />
            </div>
            <div className="">
              <p className="fw-semibold ">
                Buttonwood, California. <br />
                <small className="text-secondary">Rosemead, CA 91770</small>
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center mt-3">
            <div className="">
              <FaPhone className="fs-2 text-dark" />
            </div>
            <div className="">
              <p className="fw-semibold ">
                00 (440) 9865 562 <br />
                <small className="text-secondary">Mon to Fri 9am to 6pm</small>
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center mt-3">
            <div className="">
              <FaEnvelope className="fs-2 text-dark" />
            </div>
            <div className="">
              <p className="fw-semibold">
                support@colorlib.com <br />
                <small className="text-secondary">
                  Send us your query anytime!
                </small>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Contact;
