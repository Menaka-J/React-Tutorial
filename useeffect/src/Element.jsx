import { useEffect, useState } from "react";

function Element() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
            <div className="container">
                <p>Count: {count}</p>

                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    );
}

export default Element;

//useEffect => to use when renders, mounts