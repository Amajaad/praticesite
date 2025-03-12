import Hotcarousel from "./hot_carousel";
import Item from "./item";
function hotnew() {
  return (
    <div className="row justify-content-center py-4 px-3">
      <div className="row align-items-center justify-content-between px-5">
        <div className="col-4 fw-semibold fs-3">Recently hoted</div>
        <hr />
      </div>
      <div className="col-md-9">
        <Hotcarousel />
      </div>
      <div className="col-md-3">
        <div className="card border-0">
          <div className="card-body ">
            <div className="card-img">
              <img src="img/new_single.png.webp" className="card-img" alt="" />
              <a href="" className="link-secondary text-decoration-none">
                Smartphones
              </a>
              <h6>
                LUNA Smartphone <span className="float-end fs-5">$379</span>
              </h6>
              <div className="d-flex small text-warning gap-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div className="d-flex justify-content-center w-100 mt-3">
                <button className="btn btn-primary w-100">
                  <Item price={379} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default hotnew;
