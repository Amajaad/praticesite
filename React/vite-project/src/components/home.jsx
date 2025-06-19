import { Link } from "react-router-dom";
function home() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">1.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a parent component containing a user object containing
              (name, age, and email). Send this object as a single key
              (userData) to the child component, and display the values inside
              the child component.
            </h6>
            <Link
              to="/task1"
              className="link-secondary text-decoration-none rounded stretched-link fw-semibold"
            >
              go to example
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">2.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a User Card component that displays information such as
              name, age, job title, and image. Pass all data as a single set
              (Object) of props. Use PropTypes to validate data. Set
              defaultProps so that if some data is not passed, default values
              are set. Use conditionals to display a message when some values,
              such as the image or job title, are missing.
            </h6>
            <Link
              to="/task2"
              className="link-secondary text-decoration-none rounded stretched-link fw-semibold"
            >
              go to example
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">3.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a LoginStatus component that displays "Welcome, [Name]!" if
              the user is logged in (isLoggedIn = true), otherwise it displays
              the "Log in" button. Use if-else to control what is displayed.
            </h6>
            <Link
              to="/task3"
              className="link-secondary text-decoration-none rounded stretched-link fw-semibold"
            >
              go to example
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
