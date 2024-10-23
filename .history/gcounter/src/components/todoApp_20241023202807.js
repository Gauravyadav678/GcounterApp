
import React, {useState , useEffect} from "react";

function TodoApp(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const [isinputVisible, setInputVisible]=useState(false);

    const addTask =  () => {
     setTasks([...tasks, task]);
     setTask("");
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
        <button onClick={addTask}>Submit Task</button>
        <input type="text" onChange={handleInputChange} value={task}></input>

        <button>Add Task</button>
        </>
    )
}

export default TodoApp;