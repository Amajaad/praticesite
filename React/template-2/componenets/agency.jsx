function agency() {
  const agency = {
    backgroundImage: "url(./img/bgimg.jpg)",
    backgroundSize: "100% 120%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: "88vh",
  };
  return <div className="row justify-content-center" style={agency}>
    <div className="col-md-6">
        <p className="display-4 fw-bold text-center">Creative Agency</p>
        <p className="text-uppercase text-center fs-5">marketing and design</p>
    <img src="./img/creative.png" className="img-fluid" alt="" />
    </div>
   
  </div>;
}
export default agency;
