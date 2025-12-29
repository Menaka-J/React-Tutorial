import { useState } from "react"

function RealTimeList() {

    const [players, setPlayers] = useState(["Dhoni", "Virat"]);

    function handleChange(event) {
        let newplayer = document.getElementById("inputbox").value;
        document.getElementById("inputbox").value = "";

        setPlayers(p => [...p, newplayer])
    }

    function handleRemove(index) {
        setPlayers(players.filter((pla, idx) => idx != index))
    }

    return (
        <>
            <div>
                <h2>Players List:</h2>
                <ul>
                    {players.map((player, idx) =>
                        <li key={idx} onClick={() => handleRemove(idx)}>
                            {player}
                        </li>
                    )}
                </ul>
                <input type="text" id="inputbox" placeholder="Enter Player name" />
                <button onClick={handleChange}>Add Player</button>
            </div>
        </>
    );
}

export default RealTimeList