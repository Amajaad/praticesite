import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Table, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
function producttabs() {
  return (
    <Tabs
      defaultActiveKey="contact"
      variant="pills"
      className=" justify-content-center Tabs py-3"
    >
      <Tab eventKey="home" title="Description" className="px-3">
        <p className="text-secondary small">
          Beryl Cook is one of Britain’s most talented and amusing artists
          .Beryl’s pictures feature women of all shapes and sizes enjoying
          themselves .Born between the two world wars, Beryl Cook eventually
          left Kendrick School in Reading at the age of 15, where she went to
          secretarial school and then into an insurance office. After moving to
          London and then Hampton, she eventually married her next door
          neighbour from Reading, John Cook. He was an officer in the Merchant
          Navy and after he left the sea in 1956, they bought a pub for a year
          before John took a job in Southern Rhodesia with a motor company.
          Beryl bought their young son a box of watercolours, and when showing
          him how to use it, she decided that she herself quite enjoyed
          painting. John subsequently bought her a child’s painting set for her
          birthday and it was with this that she produced her first significant
          work, a half-length portrait of a dark-skinned lady with a vacant
          expression and large drooping breasts. It was aptly named ‘Hangover’
          by Beryl’s husband and <br /> <br /> It is often frustrating to
          attempt to plan meals that are designed for one. Despite this fact, we
          are seeing more and more recipe books and Internet websites that are
          dedicated to the act of cooking for one. Divorce and the death of
          spouses or grown children leaving for college are all reasons that
          someone accustomed to cooking for more than one would suddenly need to
          learn how to adjust all the cooking practices utilized before into a
          streamlined plan of cooking that is more efficient for one person
          creating less
        </p>
      </Tab>
      <Tab eventKey="profile" title="Specifications" className="px-3">
        <Table bordered hover>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Width:</td>
            <td>128mm</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Height:</td>
            <td>508mm</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Depth:</td>
            <td>85mm</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Weight:</td>
            <td>52gm</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Quality Checking:</td>
            <td>Yes</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Insurance Duration:</td>
            <td>3 Months</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">When Packeting:</td>
            <td>Without Touch of Hand</td>
          </tr>
          <tr className="text-secondary small">
            <td className="ps-5 py-2">Each Box Contains:</td>
            <td>1 pc</td>
          </tr>
        </Table>
      </Tab>
      <Tab eventKey="contact" title="Reviews" className="px-3 py-3">
        <Row>
          <Col md={6} className="mt-4">
            <Row className="justify-content-center py-3">
              <Col
                md={5}
                style={{ backgroundColor: "#f6f6f6" }}
                className="text-center py-3 ms-2 align-items-center"
              >
                <h3 className="mt-4">overall</h3>
                <h1 className="fw-bolder text-warning">4.0</h1>
                <p>3 Reviews</p>
              </Col>
              <Col md={5} className="text-center">
                <h6>Based on 3 Reviews</h6>
                <small className="text-start">
                  <p>
                    (1) 5 Stars: <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </p>
                  <p>
                    (9) 4 Stars:
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </p>
                  <p>
                    (6) 3 Stars: <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </p>
                  <p>
                    (3) 2 Stars: <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </p>
                  <p>
                    (1) 1 Stars: <FaStar className="text-warning" />
                  </p>
                </small>
              </Col>
            </Row>
            <Col md={11} className=" ms-2">
              <div className="d-flex align-items-center">
                <img
                  src="img/product-details/review-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className=" ms-3">
                  <h6>
                    <p>Blake Ruiz</p>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </h6>
                </div>
              </div>
              <small className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </small>
            </Col>
            <Col md={11} className=" ms-2 mt-3">
              <div className="d-flex align-items-center">
                <img
                  src="img/product-details/review-2.png"
                  alt=""
                  className="img-fluid"
                />
                <div className=" ms-3">
                  <h6>
                    <p>Blake Ruoz</p>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </h6>
                </div>
              </div>
              <small className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </small>
            </Col>
            <Col md={11} className=" ms-2 mt-3">
              <div className="d-flex align-items-center">
                <img
                  src="img/product-details/review-3.png"
                  alt=""
                  className="img-fluid"
                />
                <div className=" ms-3">
                  <h6>
                    <p>Blake Ruaz</p>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </h6>
                </div>
              </div>
              <small className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </small>
            </Col>
          </Col>
          <Col md={6} className="mt-4">
            <h3>Add a Review</h3>
            <p className="text-secondary small">
              Your Rating: <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-2" />
              Outstanding
            </p>
            <form action="">
              <input
                type="text"
                className="form-control"
                placeholder="Your Full Name"
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="email address"
              />
              <input
                type="number"
                className="form-control mt-3"
                placeholder="phone number"
              />
              <textarea
                placeholder="Your Review"
                className="form-control mt-3"
              ></textarea>
            </form>
            <div className="d-flex justify-content-end">
              <Button variant="warning" className="rounded-0 text-light mt-2">
                Submit Now
              </Button>
            </div>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
}

export default producttabs;
