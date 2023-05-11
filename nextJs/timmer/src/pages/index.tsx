
import { useEffect, useState } from 'react'

export default function Home() {
  const [time, setTime] = useState(0);
  const [start,setStart] = useState(false)


    useEffect(() => {
      if(start){
        const timer = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
    
        return () => clearInterval(timer);
      }
    },[start]);
  
    function onStop(){ 
      setStart(false)
    }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="tim">
        <button onClick={()=>setStart(true)}>Start</button>
        <button onClick={()=>setTime(0)}>Reset</button>
        <button onClick={onStop}>Stop</button>
      </div>
      {time}
    
    </main>
  )
}
