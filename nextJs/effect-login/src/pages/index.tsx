import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="tim">
        <button onClick={()=>setStart(true)}>Start</button>
        <button onClick={()=>setTime(0)}>Reset</button>
        <button>Stop</button>
      </div>
      {time}
    
    </main>
  )
}
