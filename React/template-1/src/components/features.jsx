function featurecontent() {
  return (
    <div className="row justify-content-center py-2">
      <div className="col-md-5">
        <img src="./feature.jpg" className="img-fluid" alt="" />
      </div>
      <div className="col-md-5 mt-md-0 mt-1">
        <div className="row justify-content-center gap-4 features">
          <div className="col-md-5 col-10 text-bg-danger text-center align-content-center py-5 py-md-3">
            <i class="bi bi-code-slash display-2 d-md-none d-block"></i>
            <i class="bi bi-code-slash display-6 d-md-block d-none"></i>
            <p className="fs-3 text-center">Development</p>
          </div>
          <div className="col-md-5 col-10  text-center  align-content-center py-5 py-md-3">
            <i class="bi bi-briefcase text-primary display-2 d-md-none d-block"></i>
            <i class="bi bi-briefcase text-primary display-6 d-md-block d-none"></i>
            <p className="fs-3">Top Skills</p>
          </div>
          <div className="col-md-5 col-10  text-center  align-content-center py-5 py-md-3">
            <i class="bi bi-boxes display-2 text-primary d-md-none d-block"></i>
            <i class="bi bi-boxes display-6 text-primary d-md-block d-none"></i>
            <p className="fs-3">Design</p>
          </div>
          <div className="col-md-5 col-10 text-bg-primary text-center  align-content-center py-5 py-md-3">
            <i class="bi bi-pc-display display-2 d-md-none d-block"></i>
            <i class="bi bi-pc-display display-6 d-md-block d-none"></i>
            <p className="fs-3">Responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default featurecontent;
