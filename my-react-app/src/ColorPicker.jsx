import { useState } from "react";

function ColorPicker() {
    const boxstyle = {
        height: '200px',
        width: '200px',
        borderRadius: '10px',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '20px',
        fontWeight: 'bold'
    };

    const [color, setColor] = useState("#FFFFFF");

    const colorchange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <div>
                <h1>COLOR PICKER</h1>
                <div style={{ ...boxstyle, backgroundColor: color }}>
                    <p>Selected color: {color}</p>
                </div>
            </div>
            <div>
                <p>Select a color</p>
                <input type="color" onChange={colorchange} />
            </div>
        </>
    );
}

export default ColorPicker;