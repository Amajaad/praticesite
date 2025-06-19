function plans() {
  const bgcolor = {
    backgroundColor: "#a8d8da",
  };
  const letterspace = {
    letterSpacing: "5px",
  };

  return (
    <>
      <div className="row justify-content-center py-5 mb-4" style={bgcolor}>
        <h5 className="fw-light text-center fs-5" style={letterspace}>
          Sample Headline
        </h5>
        <h3 className="display-2  fw-bold text-center">
          We take your plans, <br /> ideas and business
        </h3>
        <div className="line mt-4 mb-4"></div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-bg-light rounded-3 p-4 fs-5">
            We are more than happy for the trust, support and amazing work we
            can do for our clients. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. <br />
            <button className="btn btn-dark px-5 py-3 fs-5 mt-3">
              Contact Us
            </button>
          </div>
          <div className="col-md-5 fs-5 ms-md-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Cum sociis natoque
            penatibus et magnis dis. At in tellus integer feugiat scelerisque
            varius. Pulvinar pellentesque habitant morbi tristique senectus et
            netus et. Aenean pharetra magna ac placerat vestibulum. Nisl vel
            pretium lectus quam id. Porttitor eget dolor morbi non arcu risus
            quis varius quam.
          </div>
        </div>
      </div>
    </>
  );
}
export default plans;
