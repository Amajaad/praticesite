function design() {
  return (
    <div className="row justify-content-center mt-3 py-5">
      <div className="col-md-6 mb-5">
        <img src="./public/design.jpg" className="img-fluid" alt="" />
      </div>
      <div className="circle z-3"></div>
      <div className="col-md-3 col-8 ms-5 ms-md-0">
        <div className="card design-card border-0 p-2 py-4 mt-4 z-3">
          <div className="fs-2 ms-4 z-3">Design Perfection</div>
          <div className="fs-5 w-75 ms-4 z-3">
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </div>
          <button className="btn btn-primary rounded-pill ms-4 mt-4 col-6">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
export default design;
