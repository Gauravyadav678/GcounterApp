
import React, {useState , useEffect} from "react";

function TodoApp(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);

    const addTask =  (event) => {
     setTask(event.target.value);
    }
    return(
        <>
        <h1>This is To Do App</h1>
        <ul>
         
        </ul>
        <button onClick={addTask}>Add Task</button>
        <input type="text" onChange={handleInputChange} value={task}></input>
        </>
    )
}

export default TodoApp;