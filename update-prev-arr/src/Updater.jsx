import { useState } from "react"

function Updater() {

    const [player, setPlayer] = useState({ name: "", age: 17, team: "" })

    function handleName(e) {
        setPlayer(p => ({ ...p, name: e.target.value }))
    }

    function handleAge(e) {
        setPlayer(p => ({ ...p, age: e.target.value }))
    }

    function handleTeam(e) {
        setPlayer(p => ({ ...p, team: e.target.value }))
    }
    return (

        <>

        <div className="displaytxt">
            <p>Name: {player.name}</p>
            <p>Age: {player.age}</p>
            <p>Team: {player.team}</p>
        </div>

        <br /><br />

        <div className="inputtxt">
            <label>Enter your Name:</label>
            <br />
            <input type="text" value={player.name} placeholder="Enter your Name" onChange={handleName} />
            <br /><br />

            <label>Enter Age:</label>
            <br />
            <input type="number" value={player.age} placeholder="Enter age" onChange={handleAge}/>
            <br /><br />

            <label>Enter</label>
        </div>
        </>
    )
}

export default Updater