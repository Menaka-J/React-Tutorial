import { useEffect } from "react";
import { useRef } from "react"

function Ref() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        console.log("rendered");
    })

    function handleclick() {
        ref1.current.focus();
        ref1.current.style.backgroundColor = "yellow";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";

    }

    function handleclick2() {
        ref2.current.focus();
        ref2.current.style.backgroundColor = "yellow";
        ref1.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";

    }

    function handleclick3() {
        ref3.current.focus();
        ref3.current.style.backgroundColor = "yellow";
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";

    }
    return (
        <>
            <button onClick={handleclick}>Click Me</button>
            <input ref={ref1} />

            <br /><br />
            <button onClick={handleclick2}>Click Me</button>
            <input ref={ref2} />
            <br /><br />
            <button onClick={handleclick3}>Click Me</button>
            <input ref={ref3} />
        </>
    )
}

export default Ref 