import CountUp from "./countup";
function about() {
  return (
    <>
      <div className="row py-5 black text-white justify-content-center">
        <div className="col-md-5 ">
          <p className="fw-bold fs-3">About Us</p>
          <p className="fw-bold display-5">
            Strategic Solutions <br /> for Business Growth
          </p>
        </div>
        <div className="col-md-5">
          <ul
            class="nav nav-tabs about fs-5 gap-3 text-uppercase d-inline-flex"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item  w-25" role="presentation">
              <button
                class="nav-link btn about-btn active text-white border-0 rounded-0 mb-3 px-4"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Strategy
              </button>
            </li>
            <li class="nav-item w-25 me-3" role="presentation">
              <button
                class="nav-link btn about-btn text-white border-0 rounded-0 mb-3 px-4"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Operations
              </button>
            </li>
            <li class="nav-item w-25 " role="presentation">
              <button
                class="nav-link btn about-btn text-white border-0 rounded-0 mb-3 px-4"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Fınance
              </button>
            </li>
          </ul>
          <div class="tab-content fs-5 mt-4" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div className="row  justify-content-center gap-5 py-4">
          <div className="col-md-2 col-9 gray text-center py-3">
            <i class="bi bi-star display-3 "></i>
            <p className="fs-1" num="100">
              <CountUp end={100} />
            </p>
            <p className="fs-4">Increased Revenue</p>
          </div>
          <div className="col-md-2 col-9 gray text-center py-3">
            <i class="bi bi-globe2 display-3"></i>
            <p className="fs-1" num="100">
              <CountUp end={12000} />
            </p>
            <p className="fs-4">Optimized Processes</p>
          </div>
          <div className="col-md-2 col-9 gray text-center py-3">
            <i class="bi bi-person display-3"></i>
            <p className="fs-1" num="100">
              <CountUp end={43} />
            </p>
            <p className="fs-4">Expanded Market</p>
          </div>
          <div className="col-md-2 col-9 gray text-center py-3">
            <i class="bi bi-lightbulb-fill display-3"></i>
            <p className="fs-1" num="100">
              <CountUp end={21} />
            </p>
            <p className="fs-4">Enhanced Efficiency</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
