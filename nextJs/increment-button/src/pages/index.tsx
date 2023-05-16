import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [number,setNumber] = useState(0)

  useEffect(()=>{
    const local = JSON.parse(localStorage.getItem('number')!)
  
    if(local){
      setNumber(local)
    } else{
      setNumber(number)
    }

  },[])
  
  
  function increment(){
    setNumber((prevNumber) => {
      const newNumber = prevNumber + 1;
      localStorage.setItem("number", JSON.stringify(newNumber));
      return newNumber;
    });
  }

  function decrement(){  
    setNumber((prevNumber) => {
      const newNumber = prevNumber - 1;
      localStorage.setItem("number", JSON.stringify(newNumber));
      return newNumber;
    });
  }
  function reset() { 
    setNumber(()=>{
      const newNumber = 0
      localStorage.setItem('number',JSON.stringify(newNumber))
      return newNumber
    }
    )
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full justify-center p-24 ${inter.className} ${style.main}`}
    >
      <div className={`flex justify-between items-center gap-10 `}>
        <button type='button' className={style.button} onClick={increment}>Plus</button>
        <button type='button' className={style.button} onClick={decrement}>Minus</button>
        <button type='button'className={style.button} onClick={reset}>Reset</button>
      </div>
      <p className={`number m-5`}>{number}</p>
    </main>
  )
}
