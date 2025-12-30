import { useContext } from "react";
import { useState } from "react"
import CompB from "./CompB";
import { createContext } from "react";

export const NameContext = createContext();

function CompA() {

    const [name, setName] = useState("Menaka");
    return (
        <>
            <div className="container">
                <h3>Component A</h3>
                <h4>{`Hello ${name}`}</h4>
                <NameContext.Provider value={name}>
                    <CompB name={name}></CompB>
                </NameContext.Provider>
            </div></>
    )
}

export default CompA 