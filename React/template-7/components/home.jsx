import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      <div className="row">
        <div className="col-md-6">
          <Link to="/countdown" className="btn btn-primary">
            Countdown
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/currency" className="btn btn-primary text-truncate   ">
            Currency converter
          </Link>
        </div>
      </div>
    </div>
  );
}
export default home;
// Compare this snippet from src/App.jsx:
