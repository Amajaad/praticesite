function process() {
  const bgcolor ={
    backgroundColor: "#f2f2f2"
  }
  return (
    <div className="row justify-content-center py-4" style={bgcolor}>
         <div className="col-md-5 col-10">
        <img src="./images/process.jpg" className="img-fluid h-100 " alt="" />
      </div>
      <div className="col-md-5 col-10 mt-4 mt-md-0">
        <div className="orange text-white fs-5 d-inline py-2 px-4">
        Optimized Processes
        </div>
        <h1 className="display-4 fw-bold mt-3">
        Expertise Driving Sustainable Change

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
   
    </div>
  );
}
export default process;
