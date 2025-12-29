import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    function handletaskchange(event) {
        setNewtask(event.target.value);
    }

    function addtask() {
        if (newTask != "") {
            setTasks(t => [...t, newTask]);
            setNewtask("");
        }

    }

    function deletetask(index) {
        const deletedtasknot = tasks.filter((_, idx) => idx != index);
        setTasks(deletedtasknot);
    }

    function movetaskup(index) {
        if (index > 0) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index - 1]] = [updatedtasks[index - 1], updatedtasks[index]];
            setTasks(updatedtasks);
        }
    }


    function movetaskdown(index) {
        if (index < tasks.length - 1) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index + 1]] = [updatedtasks[index + 1], updatedtasks[index]];
            setTasks(updatedtasks);
        }
    }


    return (
        <>
            <div className="todolist">
                <h2>TO DO LIST</h2>

                <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handletaskchange} />
                <button className="addbutton" onClick={addtask}><b>ADD</b></button>

                <div className="todoitems">
                    <ul>
                        {tasks.map((task, idx) => (
                            <li key={idx}>
                                {task}
                                <button className="deletebutton" onClick={() => deletetask(idx)}><b>DELETE</b></button>
                                <button className="upbutton" onClick={() => movetaskup(idx)}>👆</button>
                                <button className="downbutton" onClick={() => movetaskdown(idx)}>👇</button>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </>
    );
}

export default ToDoList