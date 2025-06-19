function hiring() {
  const background = {
    backgroundImage: "url(./img/bgimg3.jpg)",
    height: "110vh",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
    <div className="display-3 text-center fw-bold">
    Looking out for <br />
    super people
    </div>
      <div className="row justify-content-center py-3 align-items-center" style={background}>
        <div className="col-md-5">
          <ul className="fs-3">
            <li>Remote-first company setup</li>
            <li>Competitive compensation / equity package</li>
            <li>Healthy work-life balance</li>
            <li>Parent-friendly company culture</li>
            <li>Educational stipend</li>
            <li>30-days vacation</li>
            <li>Top-of-the-line equipment</li>
            <li>Experienced, distributed, and diverse team</li>
          </ul>
        </div>
        <div className="col-md-5 ">
          <div className="btn-btn-group">
            <button
              className="btn w-100 text-start links fs-5"
              data-bs-toggle="collapse"
              data-bs-target="#first"
            >
              Senior Backend Engineer
              <i class="bi bi-arrow-down-circle-fill float-end fs-4 text-black"></i> <hr />
            </button>
          </div>
          <ul className="collapse show" id="first">
            <li>Interdum velit euismod in pellentesque.</li>
            <li>Tristique et egestas quis ipsum suspendisse.</li>
            <li>Nibh nisl condimentum id venenatis.</li>
            <li>Diam volutpat commodo sed egestas egestas fringilla.</li>
          </ul>
          <div className="btn-btn-group">
            <button
              className="btn w-100 text-start links fs-5"
              data-bs-toggle="collapse"
              data-bs-target="#second"
              aria-expanded="false"
            >
              Senior Backend Designer
              <i class="bi bi-arrow-down-circle-fill float-end fs-4 text-black"></i> <hr />
            </button>
          </div>
          <ul className="collapse" id="second">
            <li>Mattis nunc sed blandit libero volutpat.</li>
            <li>Tortor at risus viverra adipiscing at in tellus.</li>
            <li>Purus ut faucibus pulvinar elementum.</li>
            <li>Blandit turpis cursus in hac habitasse</li>
          </ul>
          <div className="btn-btn-group">
            <button
              className="btn w-100 text-start links fs-5"
              data-bs-toggle="collapse"
              data-bs-target="#third"
              aria-expanded="false"
            >
              Product Designer
              <i class="bi bi-arrow-down-circle-fill float-end fs-4 text-black"></i> <hr />
            </button>
          </div>
          <ul className="collapse" id="third">
            <li>Interdum velit euismod in pellentesque.</li>
            <li>Tristique et egestas quis ipsum suspendisse.</li>
            <li>Nibh nisl condimentum id venenatis.</li>
            <li>Diam volutpat commodo sed egestas egestas fringilla.</li>
          </ul>
          <div className="btn-btn-group">
            <button
              className="btn w-100 text-start links fs-5"
              data-bs-toggle="collapse"
              data-bs-target="#forth"
            >
              Senior Flutter Developer
              <i class="bi bi-arrow-down-circle-fill float-end fs-4 text-black"></i> <hr />
            </button>
          </div>
          <ul className="collapse" id="forth">
            <li>Interdum velit euismod in pellentesque.</li>
            <li>Tristique et egestas quis ipsum suspendisse.</li>
            <li>Nibh nisl condimentum id venenatis.</li>
            <li>Diam volutpat commodo sed egestas egestas fringilla.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default hiring;
