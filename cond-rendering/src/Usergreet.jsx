function Usergreet(props){

    const welcomemsg = <h2 className="welcome">Welcome {props.name}!</h2>
    const notloggedmsg = <h2 className="">Please LogIn to continue!</h2>

    return(props.isLogged ? welcomemsg : notloggedmsg)
}

export default Usergreet