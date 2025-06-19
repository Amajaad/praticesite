function services() {
  return (
    <>
      <div className="row justify-content-center">
        <header className="display-3 fw-bold text-center mt-4">Services</header>
        <p className="text-center col-9 fw-semibold fs-5 mt-4">
          We offer support, visual & design strategies to our customers.. Click
          to select the text box. Click again or double click to start editing
          the text. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="row justify-content-evenly mt-4 mb-5 gap-md-0 gap-3">
          <div className="col-md-3 col-9 bg-primary-subtle py-3 rounded-4 px-3">
            <div className="bg-white d-inline-block p-3 rounded">
              <svg
                className="u-svg-content"
                viewBox="0 0 512 512"
                id="svg-2e2d"
                width={60}
                fill="#a8d8da"
              >
                <g>
                  <path d="m193.29 395.63c-42.64 0-77.33-34.69-77.33-77.33v-25.59c-62.506-3.875-116.177 46.692-115.959 109.34 0 60.4 49.14 109.53 109.53 109.53 62.65.217 113.214-53.436 109.34-115.95z"></path>
                  <path d="m262.94 146.56h-69.65c-26.1 0-47.33 21.24-47.33 47.33-.042 16.556.03 110.208 0 124.41 0 26.09 21.23 47.33 47.33 47.33 14.916-.029 107.366.021 124.4 0 26.1 0 47.33-21.24 47.33-47.33v-68.81h-102.08z"></path>
                  <path d="m292.94.42v219.07h219.06v-219.07z"></path>
                </g>
              </svg>
            </div>
            <p className=" fs-3">Visualize it</p>
            <p className="fw-light">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="col-md-3 col-9 bg-primary-subtle py-3 rounded-4 px-3">
            <div className="bg-white d-inline-block p-3 rounded">
              <svg
                class="u-svg-content"
                viewBox="0 0 512.001 512.001"
                id="svg-38fc"
                fill="#a8d8da"
                width={60}
              >
                <g>
                  <g>
                    <path d="M502.979,317.996L230.502,199.598c26.679-30.977,43.37-68.952,48.104-109.598h16.395c8.284,0,15-6.716,15-15V15    c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h13.362    c-5.335,38.976-23.597,74.898-52.382,102.447c-29.08,27.831-66.261,44.536-105.98,47.907v-9.265c0-8.284-6.716-15-15-15h-60    c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-20.631    c39.772-2.876,77.462-17.167,109.042-41.233l118.953,273.754c2.391,5.5,7.81,9.022,13.753,9.022c0.283,0,0.567-0.008,0.853-0.024    c6.272-0.355,11.659-4.582,13.496-10.589l27.229-89.03c5.725-18.716,20.315-33.307,39.03-39.031l89.03-27.229    c6.008-1.837,10.234-7.224,10.589-13.497C512.332,326.329,508.741,320.5,502.979,317.996z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className=" fs-3">Create it</p>
            <p className="fw-light">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="col-md-3 col-9 bg-primary-subtle py-3 rounded-4 px-3">
            <div className="bg-white d-inline-block p-3 rounded">
              <img
                src="./img/grow.png"
                className="img-fluid"
                width={60}
                alt=""
              />
            </div>
            <p className=" fs-3">Grow it</p>
            <p className="fw-light">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default services;
