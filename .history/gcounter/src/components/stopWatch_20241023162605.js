import React ,{useState , useEffect} from "react";

function StopWatch(){
    const [time,settime]=useState(0);
    const [isActive,setisActive]=useState(false);
  
     useEffect(()=>{
        let interval;
        if(isActive){
            interval = setInterval ( () => {
                settime((prev) => prev+1 );
            })
        }
     },[isActive]);

    const start = () => {
       setisActive(true);
    }
    return(
        <>
        <h1>
         this is the my Stop Watch 
        </h1>
     
        <p>time : {time}</p>
        <button onClick={start}>Start</button>
    
        <button onClick={stop}>Stop</button>
        <button onClick={resetTime}>Reset </button>
        </>
    )
}

export default StopWatch;