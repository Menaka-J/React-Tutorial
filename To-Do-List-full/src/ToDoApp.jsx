import { useRef } from "react";
import { useState, useEffect } from "react"

function ToDoApp() {

    const API_URL = 'http://localhost:3000/taskList';
    // const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem("list")) || []);
    const [taskList, setTaskList] = useState([]);
    // const [fetchError, setFtechError] = useState(null);
    const inputRef = useRef();

    function addtask() {
        let newtask = document.getElementById("io").value;
        if (newtask != "") {
            setTaskList(t => ([...t, newtask]));
            document.getElementById("io").value = "";
        }
    }

    function deletetask(idx) {
        const newlist = taskList.filter((_, index) => index != idx);
        setTaskList(newlist);
    }

    function moveup(idx) {
        if (idx > 0) {
            const taskold = [...taskList];
            [taskold[idx], taskold[idx - 1]] = [taskold[idx - 1], taskold[idx]];
            setTaskList(taskold);
        }
    }

    function movedown(idx) {
        if (idx >= 0 && idx < taskList.length - 1) {
            const taskold = [...taskList];
            [taskold[idx], taskold[idx + 1]] = [taskold[idx + 1], taskold[idx]];
            setTaskList(taskold);
        }
    }
    // useEffect(() => {
    //     localStorage.setItem("list", JSON.stringify(taskList));
    // }, [taskList]);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Error 404 . Data not received!");
                console.log(response);
                const listItems = await response.json();
                console.log(listItems);
                setTaskList(listItems);
                // setFtechError(null);
            } catch (err) {
                console.log(err.stack);
                // setFtechError(err.message);
            }
        }
        (async () => await fetchItems())()
    }, []);

    return (
        <>

            <div className="container">
                <h2 className="title">TO DO LIST</h2>
                <div className="inputform">
                    <input type="text" placeholder="Enter Task" id="io" ref={inputRef} />
                    <button onClick={() => {
                        inputRef.current.focus();
                        addtask();
                    }} className="addb" >ADD TASK</button>
                </div>

                <div className="tasklist">
                    <h3 className="tasktitle">YOUR TASKS</h3>
                    <ol className="ullist">
                        {taskList.map((ele, i) =>
                            <li key={i} className="listone">
                                <span className="taskname">{ele}</span>
                                <button onClick={() => deletetask(i)} className="deleteb">DELETE</button>
                                <button onClick={() => moveup(i)} className="upb">👆</button>
                                <button onClick={() => movedown(i)} className="downb">👇</button>
                            </li>
                        )}
                    </ol>
                </div>

            </div >
        </>
    )
}

export default ToDoApp