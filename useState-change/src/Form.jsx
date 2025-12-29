import { useState } from "react"

function Form() {

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("");
    const [dept, setDept] = useState("");
    const [moto, setMoto] = useState("");

    function handlename(e) {
        setName(e.target.value)
    }

    function handleage(e) {
        if (e.target.value > 0) {
            setAge(e.target.value)
        }
    }

    function handlgender(e) {
        setGender(e.target.value)
    }

    function handledept(e) {
        setDept(e.target.value)
    }

    function handlemoto(e) {
        setMoto(e.target.value)
    }

    return (
        <>
            <div className="details">
                <form>
                    <label>Name: {name}</label>
                    <br />
                    <label>Age: {age}</label>
                    <br />
                    <label>Department: {dept}</label>
                    <br />
                    <label>Gender:  {gender}</label>
                    <br />
                    <label>Moto: {moto}</label>
                    <br /><br />
                </form>
            </div>

            <div className="formdetails">
                <h2>STUDENT FORM</h2>
                <form>
                    <input type="text" value={name} placeholder="Enter your Name" onChange={handlename} />
                    <br />
                    <br />

                    <input type="number" value={age} placeholder="Enter your Age" onChange={handleage} />
                    <br />
                    <br />

                    <select value={dept} onChange={handledept}>
                        <option value="">Select Department</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="AutoMobile">AUTO</option>
                    </select>
                    <br />
                    <br />

                    Select Gender:
                    <br />
                    <input type="radio" value="Female" onChange={handlgender} checked={gender === "Female"} />Female
                    <br />
                    <input type="radio" value="Male" onChange={handlgender} checked={gender === "Male"} />Male
                    <br />
                    <br />

                    <input type="text" value={moto} placeholder="Enter your Moto" onChange={handlemoto} />
                </form>
            </div>
        </>
    )
}

export default Form 