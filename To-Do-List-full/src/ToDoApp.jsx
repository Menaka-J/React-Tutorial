import { useRef } from "react";
import { useState, useEffect } from "react"
import apiRequest from "./apiRequest";

function ToDoApp() {

    const API_URL = 'http://localhost:3000/taskList';
    const [taskList, setTaskList] = useState([]);
    const [fetchError, setFtechError] = useState(null);
    // const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem("list")) || []);
    const [isLoading, setLoading] = useState(true);
    const inputRef = useRef();

    async function addtask() {
        let newtask = document.getElementById("io").value.trim();
        if (!newtask) return;

        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newtask })
        };

        const result = await apiRequest(API_URL, postOptions);

        if (typeof result === "string") {
            setFtechError(result);
        } else {
            setTaskList(t => [...t, result]);
            document.getElementById("io").value = "";
        }
        console.log("Task added")

        // const requrl = `${API_URL}/${id}`
        // const result = await apiRequest(requrl, postOptions)
        // if (result) setFtechError(result)
    }


    // async function deletetask(idx) {
    //     const newlist = taskList.filter((_, index) => index != idx);
    //     setTaskList(newlist);

    // const deleteOptiosn = {method:'DELETE'}
    // const requrl = `${API_URL}/${idx}`
    // const result = await apiRequest(requrl, deleteOptiosn)
    // if (result) setFtechError(result)

    // }
    async function deletetask(id) {
        const result = await apiRequest(`${API_URL}/${id}`, { method: 'DELETE' });

        if (result) {
            setFtechError(result);
        } else {
            setTaskList(taskList.filter(task => task.id !== id));
        }
        console.log("Task deleted")
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
                setFtechError(null);
            } catch (err) {
                console.log(err.stack);
                setFtechError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        //the below coed will make load for 2 sec which means the data in db.json wouldn't available till 2sec
        setTimeout(() => {
            (async () => await fetchItems())()
        }, 1000)
        // (async () => await fetchItems())()
    }, []);

    const itemmsg = taskList.map((ele, i) =>
        <li key={ele.id} className="listone">
            <span className="taskname">{ele.title}</span>
            <button onClick={() => deletetask(ele.id)} className="deleteb">DELETE</button>
            <button onClick={() => moveup(i)} className="upb">👆</button>
            <button onClick={() => movedown(i)} className="downb">👇</button>
        </li>
    )

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

                {!fetchError ? <div className="tasklist">
                    <h3 className="tasktitle">YOUR TASKS</h3>
                    {isLoading && <h3>Loading Tasks...</h3>}
                    <ol className="ullist">
                        {taskList.length > 0 ? itemmsg : !isLoading && <h3>No Tasks added yet</h3>}
                    </ol>
                </div> :
                    <div><h3>{fetchError}</h3>
                        <h3>Error occured</h3>
                        <h3>Try agian later</h3></div>
                }


            </div >
        </>
    )
}

export default ToDoApp