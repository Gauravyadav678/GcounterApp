import React, {useState } from 'react';

function CounterApp(){

    const [count, setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }
    return(
        <>
        <h2>Counter value : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )
}

export default CounterApp;