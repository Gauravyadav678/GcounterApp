import React ,{useState , useEffect} from "react";

function StopWatch(){
    const [time,settime]=useState(0);

    const start = () => {
        setInterval(()=>{
            settime(time+1)
        },500)
    }
    return(
        <>
        <h1>
         thi is the my Stop Watch 
        </h1>
     
        <p>time : {time}</p>
        <button onClick={start}>Start</button>
    
        <button>Stop</button>
        <button>Reset </button>
        </>
    )
}

export default StopWatch;