function contact() {
  return (
    <div className="row py-4 pb-5 contact">
      <div className="contact-bg">
        <div className="row justify-content-around contain">
          <form action="" className="bg-white col-7 py-4 px-md-5 rounded">
            <div className="row">
              <div className="col-md-5">
                <div className="fs-2 ">Contact info</div>
                <div className=" fs-5 mb-4 d-flex flex-column mt-3">
                  <a href="" className="text-black text-decoration-none py-2">
                    <i class="bi bi-telephone text-primary"></i> +1 (234)
                    567-8910 <br />
                  </a>
                  <a href="" className="text-black text-decoration-none py-2">
                    <i class="bi bi-envelope text-primary"></i>{" "}
                    contact@yourmail.com <br />
                  </a>
                  <a href="" className="text-black text-decoration-none py-2">
                    <i class="bi bi-geo-alt text-primary"></i> 203, Envato Labs,
                    Behind Alis Steet, Australia
                  </a>
                  <div className="ms-md-3 me-md-5 ms-1 mt-5">
                    <a href="">
                      <i className="bi bi-facebook fs-3 text-primary"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter fs-3 text-primary ms-3"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram text-primary fs-3 ms-3"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-youtube fs-3 ms-3 text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control bg-light-subtle mb-4"
                  placeholder="Enter Your Name"
                />
                <input
                  type="email"
                  className="form-control bg-light-subtle mb-4"
                  placeholder="Enter Your email"
                />
                <textarea
                  rows={5}
                  className="form-control bg-light-subtle mb-3"
                   placeholder="Enter Your Message"
                ></textarea>
                <button className="btn btn-primary w-100 rounded-0 fw-bold">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default contact;
