import './App.css'

import Timer from '/components/timer.jsx'
import Cleanupinput from "../components/input.jsx";

function App() {


    return (
        <div className="container-fluid">
            {/*timer element*/}
            <div className="row justify-content-center mt-2">
                <div className="col-md-6 p-3 bg-black text-white">
<h4>component 1</h4>
                    Create a Timer component that automatically increments the timer every second using setInterval
                    within useEffect. Ensure the timer is stopped when the component is unloaded.
                </div>
                <div className="col-md-6"><Timer/></div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6"><Cleanupinput/></div>
                <div className="col-md-6 p-3 bg-black text-white">
                    <h4>component 2</h4>
                    Create a React component that allows the user to type text into an input field. The text should be
                    auto-saved to localStorage every 2 seconds using setInterval. When the component is unmounted, clear
                    the interval to prevent memory leaks.
                </div>
            </div>

        </div>
    )
}

export default App
