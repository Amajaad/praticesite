import {useEffect, useState} from "react";

function Timer() {
    const [message, setmessage] = useState("this element will unload after 5 seconds")
    useEffect(() => {
        const timeout = setTimeout(() => {
            setmessage("");
        }, 5000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return <h2 className="mt-4">{message}</h2>;


}

export default Timer;