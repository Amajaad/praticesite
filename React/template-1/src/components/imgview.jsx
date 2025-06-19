import React, { useState } from "react";

function ImagePreview() {
  // Initial state with default images
  const [images, setImages] = useState([
    "./public/img1.jpg",
    "./public/img2.jpg",
    "./public/img3.jpg",
    "./public/img4.jpg",
    "./public/img5.jpg",
    "./public/img6.jpg",
  ]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex mt-4 justify-content-around">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 mb-2 z-3">
            <img
              src={image}
              alt={`Image Preview ${index + 1}`}
              className="prv img-fluid rounded z-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagePreview;
