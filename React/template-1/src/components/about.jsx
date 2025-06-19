function about() {
  return (
    <div className="about">
      <div className="row py-5 ">
        <div className="row justify-content-center">
          <div className="col-md-3 col-10 align-content-center ">
            <img
              src="./public/emp1.jpg"
              alt=""
              style={{ height: 350 }}
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-3 col-10 align-content-center ">
            <div className="bg-white p-3">
              <p className="fs-2">About Us</p>
              <p className="fs-5">
                We align leaders around a shared purpose and strategic story
                that catalyzes their business and brand to take action.
              </p>
            </div>
            <img
              src="./public/emp2.jpg"
              alt=""
              style={{ height: 350 }}
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-3 col-10 align-content-center ">
            <img
              src="./public/emp3.jpg"
              alt=""
              style={{ height: 350 }}
              className="img-fluid w-100"
            />
            <div className="bg-gradient text-bg-primary py-3 px-2 z-3">
              <span className="display-3 text-white   ">,,</span>
              <div className=" display-6 p-3 z-2">
                Teamwork is the ability to work together toward a common vision.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default about;
