import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [team, setTeam] = useState("");
    const [comment, setComment] = useState("");
    const [gpwin, setGpwin] = useState("");

    const namechange = (event) => { setName(event.target.value) }
    const agechange = (event) => { setAge(event.target.value) }
    const teamchange = (event) => { setTeam(event.target.value) }
    const commentchange = (event) => { setComment(event.target.value) }
    const gpwinchange = (event) => { setGpwin(event.target.value) }


    const classone = {
        backgroundColor: 'rgb(150, 149, 149)',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',sans - serif",
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '35px',
    }
    return (
        <>
            <div style={classone}>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Team: {team}</p>
                <p>Comment: {comment}</p>
                <p>Won a GP: {gpwin}</p>
            </div>

            <div className="classtwo">

                <label>Enter your name :
                    <input type="text" value={name} placeholder="Enter name" onChange={namechange} />
                </label>
                <br /><br />

                <label>Enter age:
                    <input type="number" placeholder="Enter age" value={age} onChange={agechange} />
                </label>
                <br /><br />

                <label>Select team:
                    <select value={team} onChange={teamchange}>
                        <option value="Red Bull" onChange={teamchange}>Red Bull</option>
                        <option value="Ferrari" onChange={teamchange}>Ferarri</option>
                        <option value="McLaren" onChange={teamchange}>McLaren</option>
                        <option value="Mercedes" onChange={teamchange}>Mercedes</option>
                        <option value="Aston Martin" onChange={teamchange}>Aston Martin</option>
                    </select>
                </label>
                <br />
                <br />
                <label>Enter comment:
                    <textarea value={comment} onChange={commentchange} placeholder="Enter your comment for your team and driver"></textarea>
                </label>
                <br />
                <br />
                <label>Has he won a GP:
                    <br />
                    <input type="radio" value="Yes" onChange={gpwinchange} checked={gpwin === "Yes"} />Yes
                    <input type="radio" value="No" onChange={gpwinchange} checked={gpwin === "No"} />No
                </label>
                <br />
            </div>
        </>
    );
}

export default Form