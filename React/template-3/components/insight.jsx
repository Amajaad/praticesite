function insight() {
  return (
    <div className="row justify-content-center py-4 mb-3">
      <div className="col-md-5  col-10">
        <div className="orange text-white fs-5 d-inline py-2 px-4">
          Operational Efficiency
        </div>
        <h1 className="display-4 fw-bold mt-3">
          Insights for Smarter Decisions
        </h1>
        <ul className="fs-5">
          <li>Stet clita kasd gubergren</li>
          <li>No sea takimata sanctus est</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
        <button className="btn btn-dark rounded-0 px-4 py-2 text-uppercase ">
          Read More
        </button>
      </div>
      <div className="col-md-5 col-10">
        <img
          src="./images/insights.jpg"
          className="img-fluid h-100 mt-md-0 mt-4 "
          alt=""
        />
      </div>
    </div>
  );
}
export default insight;
