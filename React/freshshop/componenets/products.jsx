function products() {
  return (
    <div className="row justify-content-evenly align-items-center py-2 mt-3 products fs-5">
      <div className="col-md-4 col-10 border-0">
        <img
          src="images/categories_img_01.jpg"
          className="img-fluid w-100 h-100"
          alt=""
        />
        <div className="bg-warning text-white fw-semibold text-center">
          <p className="py-2 fs-6">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="col-md-4 col-10 border-0">
        <img src="images/categories_img_02.jpg" className="img-fluid" alt="" />
        <div className="bg-warning text-white fw-semibold text-center">
          <p className="py-2 fs-6">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="col-md-4 col-10 border-0">
        <img src="images/categories_img_03.jpg" className="img-fluid" alt="" />
        <div className="bg-warning text-white fw-semibold text-center">
          <p className="py-2 fs-6">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
export default products;
