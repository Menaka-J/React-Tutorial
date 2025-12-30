import { useState } from "react"

function ToDoApp() {

    const [taskList, setTaskList] = useState([]);

    function addtask() {
        let newtask = document.getElementById("io").value;
        setTaskList(t => ([...t, newtask]));
        document.getElementById("io").value = "";
    }

    function deletetask(idx) {
        const newlist = taskList.filter((_, index) => index != idx);
        setTaskList(newlist);
    }

    function moveup(idx) {
        
    }

    function movedown(idx) {

    }

    return (
        <>

            <div className="continer">
                <h2>TO DO LIST</h2>
                <div>
                    <input type="text" placeholder="Enter Task" id="io" />
                    <button onClick={addtask}>ADD TASK</button>
                </div>

                <div className="tasklist">
                    <ol className="ullist">
                        {taskList.map((ele, i) =>
                            <li key={i}>
                                <span className="taskname">{ele}</span>
                                <button onClick={() => deletetask(i)}>DELETE</button>
                                <button onClick={() => moveup(i)}>👆</button>
                                <button onClick={() => movedown(i)}>👇</button>
                            </li>
                        )}
                    </ol>
                </div>

            </div>
        </>
    )
}

export default ToDoApp