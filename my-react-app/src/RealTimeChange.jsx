import { useState } from "react"

function RealTimeChange() {

    const [player, setPlayer] = useState({ name: "", year: new Date().getFullYear(), team: "" })

    function handleName(event) {
        setPlayer(p => ({ ...p, name: event.target.value }))
    }

    function handleYear(event) {
        setPlayer(p => ({ ...p, year: event.target.value }))
    }

    function handleTeam(event) {
        setPlayer(p => ({ ...p, team: event.target.value }))
    }

    return (
        <>
            <div>
                <h2>DETAILS:</h2>
                <p>Name:{player.name}</p>
                <p>Year: {player.year}</p>
                <p>Team: {player.team}</p>

                <input type="text" name={player.name} placeholder="Enter your name" onChange={handleName} />
                <br />
                <input type="number" name={player.year} placeholder="Enter year" onChange={handleYear} />
                <br />
                <input type="text" name={player.team} placeholder="Enter your team" onChange={handleTeam} />
            </div>
        </>
    )
}

export default RealTimeChange