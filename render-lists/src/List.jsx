function List(props) {

    const players = props.playersList;
    const sports = props.sportName;

    const listitems = players.map(player => <li key={player.id}>{player.name} - {player.team}</li>)

    return (
        <>
            <div className="container">
                <h2 className="title">{sports}</h2>
                <ul className="listtext">{listitems}</ul>
            </div>
        </>
    )
}

export default List 