import React, {useState } from 'react';

function CounterApp(){

    const [count, setCount]=useState(0);
    return(
        <>
        <h2>Counter value : {count}</h2>
        </>
    )
}

export default CounterApp;