import { useState } from "react"

function ArrayUpdate() {

    const [teams, setTeam] = useState(["Red Bull", "Ferrari", "Mercedes"])

    function handleaddteam() {
        const newteam = document.getElementById("io").value;
        document.getElementById("io").value = "";
        setTeam(t => ([...t, newteam]));
    }

    function handledeleteteam(idx) {
        setTeam(teams.filter((_, index) => idx != index));
    }

    return (
        <>
            <div className="rapper">
                <h2>ARRAY UPDATER EXERCISE </h2>

                <div className="displaytxt">
                    <h2>TEAMS LIST</h2>
                    <ul className="listitems">
                        {teams.map((team, i) =>
                            <li key={i} onClick={() => handledeleteteam(i)}>{team}</li>
                        )}
                    </ul>
                </div>

                <div className="inputtxt">
                    <h2>INPUT GETTER </h2>
                    <input type="text" placeholder="Enter Team Name" id="io"/>
                    <button className="button1" onClick={handleaddteam}>Add Team</button>
                </div>
            </div>

        </>
    )
}

export default ArrayUpdate