import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    function reset() {
        setCount(0);
    }

    function handleincrease() {
        setCount(c => c + 1);
    }

    function handledecrease() {
        setCount(c => c - 1);
    }

    return (
        <>
            <div className="container">
                <h2>COUNTER</h2>
                <p>{count}</p>
                <button onClick={handleincrease}>Increment</button>
                <button onClick={handledecrease}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter 