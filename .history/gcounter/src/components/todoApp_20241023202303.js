
import React, {useState , useEffect} from "react";

function TodoApp(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);

    const addTask =  (event) => {
     setTasks(task);
    }
    const handleInputChange = (event) =>{
    setTask(event.target.value);
    }
    return(
        <>
        <h1>This is To Do App</h1>
        <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
        <button onClick={addTask}>Add Task</button>
        <input type="text" onChange={handleInputChange} value={task}></input>
        </>
    )
}

export default TodoApp;