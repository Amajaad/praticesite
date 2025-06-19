function Banner1() {
  return (
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-md-5 ">
        <div className="fw-light fs-4 mt-5 " style={{ letterSpacing: 5 }}>
          creative design agency
        </div>
        <div className="display-2 " style={{fontFamily:"Bai Jamjuree"}}>
          We live to turn <br /> great ideas
        </div>
        <div className="ms-md-3 me-md-5 ms-1 mt-5">
          <a href="">
            <i className="bi bi-facebook fs-3 text-white"></i>
          </a>
          <a href="">
            <i className="bi bi-twitter fs-3 text-white ms-3"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram text-white fs-3 ms-3"></i>
          </a>
          <a href="">
            <i class="bi bi-youtube fs-3 ms-3 text-white"></i>
          </a>
        </div>
      </div>
      <div className="col-md-5 ">
        <div className="fw-lighter fs-5 mt-5 mb-3">
          We combine local knowledge with global <br /> expertise, strategy with
          design, empathy with <br /> creativity, meaning with magic. Reach out
          to <br />
          discuss how we might help you accelerate change.
        </div>
        <div className="fs-4 fw-bold">
          Duis aute irure dolor in reprehenderit
        </div>
        <button className="btn btn-danger btn-lg px-5 mt-3 py-3 rounded-pill">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Banner1;
