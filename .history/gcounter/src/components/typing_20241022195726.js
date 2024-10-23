import React , {useState} from "react";

function TypingWithG () {

    const [typed,setTyped]=useState('');

    const typing = (event) =>{
        setTyped(event.target.value);
    }
    return(
        <>
        <h2> this Is the Typing Section </h2>
         <p>Typing : {typed}</p>
         <input onChange={typing} value={typed}></input>
        </>
    )
}

export default TypingWithG;