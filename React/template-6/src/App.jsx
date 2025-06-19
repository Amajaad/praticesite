// Create a parent component containing a user object containing (name, age, and email). Send this object as a single key (userData) to the child component, and display the values inside the child component.

//  Create a User Card component that displays information such as name, age, job title, and image.
//  Pass all data as a single set (Object) of props.
//  Use PropTypes to validate data.
//  Set defaultProps so that if some data is not passed, default values are set.
//  Use conditionals to display a message when some values, such as the image or job title, are missing.

// Create a LoginStatus component that displays "Welcome, [Name]!" if the user is logged in (isLoggedIn = true),
// otherwise it displays the "Log in" button. Use if-else to control what is displayed.

import "./App.css";
import Home from "./components/home";
import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
