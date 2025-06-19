import {useEffect, useState} from "react";

function Cleanupinput() {
    const [inputvalue, setinputvalue] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            localStorage.setItem("saved", inputvalue);
            console.log("saved to localstorage: ", inputvalue);
        }, 2000);
        return () => {
            clearInterval(interval);
            console.log("input has been unmounted");
        };
    }, [inputvalue]);

    const handleinput = (event) => {
        setinputvalue(event.target.value);
    };

    return<input
        className="form-control mt-4"
        type="text"
        value={inputvalue}
        onChange={handleinput}
        placeholder="write something"
    />


}

export default Cleanupinput;