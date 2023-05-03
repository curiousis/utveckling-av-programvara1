import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [number,setNumber] = useState(0)

  function increment(){
     setNumber(number + 1)
  }

  function decrement(){  
    setNumber(number - 1)
  }
  function reset() { 
    setNumber(0)  
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
