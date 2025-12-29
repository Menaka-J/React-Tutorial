import { useState } from 'react';

function Button() {
    const cssstyle = {
        backgroundColor: 'blueviolet',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px',
        fontSize: '20px',
        width: '150px',
    };

    const parastyle = {
        fontSize: '50px',
        textAlign: 'center',
    }


    const [count, setCount] = useState(0);

    const reset = () => { setCount(0) }
    const increment = () => {
        setCount(c => c + 1) //updater function using previous state by using c instead of count
        setCount(c => c + 1) //count is current state
        setCount(c => c + 1) //c is previous state
    }
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    return (
        <>
            <div>
                <p style={parastyle}>{count}</p>
                <button style={cssstyle} onClick={reset}>reset</button>
                <button style={cssstyle} onClick={increment}>increment</button>
                <button style={cssstyle} onClick={decrement}>decrement</button>
            </div>
        </>
    );
}

export default Button;