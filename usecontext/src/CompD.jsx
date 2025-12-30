import { useContext } from "react"
import { NameContext } from "./CompA"

function CompD() {

    const name = useContext(NameContext);

    return (
        <>
            <div className="container">
                <h3>Component D</h3>
                <h4>{`Bye ${name}`}</h4>
            </div></>
    )
}

export default CompD