

function UserGreeting(props) {
    const welcomemessage = <h2 className="welcome">Welcome {props.username}</h2>
    const loginmessage = <h2 className="failure">Login to continue</h2>

    return (props.isLogin ? welcomemessage : loginmessage);
}

export default UserGreeting
