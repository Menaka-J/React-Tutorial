import { useState } from "react"

function RealTimeArrayList() {

    const [players, setPlayers] = useState([]);
    const [name, setName] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());
    const [team, setTeam] = useState("");

    function addPlayer() {
        const playernew = { playername: name, playeryear: year, playerteam: team };

        setPlayers(p => [...p, playernew]);

        setName("");
        setYear(new Date().getFullYear());
        setTeam("");
    }

    function removePlayer(index) {
        setPlayers(players.filter((p, idx) => idx != index));
    }

    function handleName(event) {
        setName(event.target.value)
    }
    function handleYear(event) {
        setYear(event.target.value)
    }
    function handleTeam(event) {
        setTeam(event.target.value)
    }


    return (
        <>
            <div>
                <h2>Players details list:</h2>
                <ul>
                    {players.map((player, idx) =>
                        <li key={idx} onClick={() => removePlayer(idx)}>
                            {player.playername} {player.playeryear}{player.playerteam}
                        </li>)}
                </ul>

                <input type="text" placeholder="Enter name" value={name} onChange={handleName} />
                <br />
                <input type="number" placeholder="Enter year" value={year} onChange={handleYear} />
                <br />
                <input type="text" placeholder="Enter Team" value={team} onChange={handleTeam} />
                <br />
                <button onClick={addPlayer}>Add Player</button>
            </div>
        </>
    )
}

export default RealTimeArrayList