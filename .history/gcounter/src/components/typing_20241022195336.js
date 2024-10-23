import React , {useState} from "react";

function TypingWithG () {

    const [typed,setTyped]=useState('');
    return(
        <>
        <h2> this Is the Typing Section </h2>
         <p>{}</p>
         <input onChange={typing}></input>
        </>
    )
}

export default TypingWithG;