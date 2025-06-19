import { Link } from "react-router-dom";
function home() {
  return (
    <div className="row">
      <div className="col-md-3 h-100">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">1.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a TodoList containing a collection of tasks (each task has
              an id, text, and completed). Create a filter to filter only
              completed tasks using filter().
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
      <div className="col-md-3 h-100">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">2.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a Counter component that contains a button to increment the
              counter. Use useEffect to display a message in the console when
              the component first loads.
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
      <div className="col-md-3 h-100">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">3.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a PageTitleUpdater component that contains an input field.
              When the user types any text, the page title (document.title) is
              updated with the value they typed.
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
      <div className="col-md-3 h-100">
        <div className="card card-hover">
          <div className="card-header text-start fs-4">4.task:</div>
          <div className="card-body">
            <h6 className="mb-4">
              Create a Timer component that automatically increments the timer
              every second using setInterval within useEffect. Make sure the
              timer stops when the component is unloaded.
            </h6>
            <Link
              to="/task4"
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
