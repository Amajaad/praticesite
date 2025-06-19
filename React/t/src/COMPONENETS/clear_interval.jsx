import { useState, useEffect } from "react";

function ClearIntervalComponent() {
    const [intervalinput, setIntervalinput] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            localStorage.setItem("interval", intervalinput);
            console.log("Interval cleared");
        }, 3000);

        return () => {
            clearInterval(intervalId);
            console.log("Interval cleared");
        };
    }, [intervalinput]);

    return (
        <>
            <input
                type="text"
                value={intervalinput}
                className="form-control mt-3"
                onChange={(e) => setIntervalinput(e.target.value)}
                placeholder="Enter text"
            />
        </>
    );
}

export default ClearIntervalComponent;
