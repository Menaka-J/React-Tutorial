import { useRef } from "react";
import { useState , useEffect } from "react"

function ToDoApp() {

    const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem("list")) || []);
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
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(taskList));
    }, [taskList]);

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