
import { Inter } from 'next/font/google'
import style from '../styles/Home.module.css'
import { FormEvent, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const choices = ['rock','paper','scissors']

  function getRandomChoice(){
    const randomNumber = Math.floor(Math.random()*choices.length)
    return choices[randomNumber]
  }

  const [playerChoice,setPlayerChoice] = useState('')
  const [computerChoice,setComputerChoice] = useState('')
  const [result,setResult] = useState('')

  function compare(playerChoice:string, computerChoice:string){
    (playerChoice === computerChoice)
    ? setResult('Draw')
    : (playerChoice ==='rock' && computerChoice === 'scissors')
    || (playerChoice ==='rock' && computerChoice == 'paper') 
    ||(playerChoice ==='scissors' && computerChoice == 'paper')
    ? setResult('You Won')
    : setResult('You Lost')
  }

  const handlePlayerChoice = ( choice : string) =>{
    const computerChoice = getRandomChoice()
    compare(choice,computerChoice);
    setComputerChoice(computerChoice);
    setPlayerChoice(choice);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} ${style.main}`}
    >
      <div className={`flex gap-8 items-center justify-center p-10 ${style.buttonContainer}`}>
        {
          choices.map(choice=> <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
            </button>)
        }
      </div>
      <div className={`font-serif ${style.results}`}>
        <p>Results: <span>{result}</span></p>
        <p>Your Choice: <span>{playerChoice}</span></p>
        <p>Computer Choice: <span>{computerChoice}</span></p>
      </div>
    </main>
  )
}
