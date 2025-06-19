function faq() {
  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-5 col-10">
        <div className="text-white fs-5 d-inline py-2 px-4 orange">FAQ</div>
        <h1 className="display-4 fw-bold mt-3">
          Frequently Asked Questions About Our Services
        </h1>
        <p className="text-secondary fs-5">
          Sample text. Click to select the Text Element.
        </p>
        <button className="btn btn-dark rounded-0 px-4 py-2 text-uppercase fs-5">
          Read More
        </button>
      </div>
      <div className="col-md-5 col-10 mt-3">
        <button
          className="btn fs-5 fw-bold bg-secondary-subtle w-100 text-start rounded-0"
          data-bs-toggle="collapse"
          data-bs-target="#a1"
        >
          What industries do you specialize in?{" "}
          <i class="bi bi-chevron-down float-end"></i>
        </button>

        <div className="collapse show p-3" id="a1">
          <p className="fs-5 text-secondary">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
            elementum. Phasellus sed efficitur dolor, et ultricies sapien.
            Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
            odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
        <button
          className="btn fs-5 fw-bold bg-secondary-subtle w-100 text-start rounded-0"
          data-bs-toggle="collapse"
          data-bs-target="#a2"
        >
          How does the consulting process work?{" "}
          <i class="bi bi-chevron-down float-end"></i>
        </button>
        <div className="collapse p-3" id="a2">
          <p className="fs-5 text-secondary">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
            elementum. Phasellus sed efficitur dolor, et ultricies sapien.
            Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
            odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
        <button
          className="btn fs-5 fw-bold bg-secondary-subtle w-100 text-start rounded-0"
          data-bs-toggle="collapse"
          data-bs-target="#a3"
        >
          What is the typical project timeline?{" "}
          <i class="bi bi-chevron-down float-end"></i>
        </button>
        <div className="collapse p-3" id="a3">
          <p className="fs-5 text-secondary">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
            elementum. Phasellus sed efficitur dolor, et ultricies sapien.
            Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
            odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
export default faq;
