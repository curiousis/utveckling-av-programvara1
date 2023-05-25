import { useState } from "react";
import emojis from "./emojis.json";
import style from '../styles/Home.module.css'

export default function Home() {

  const [userInput,setUserInput] = useState('')
  const userInputLowercase = userInput.toLowerCase()

  const filteredEmojis = () => {
    userInput === ''?  emojis.slice(0,20) : null    
    return emojis.filter(emoji => emoji.keywords.includes(userInputLowercase)).slice(0,20)
  }

  const runSearch =  (event:any) => setUserInput(event.target.value)
  const filteredEmojisResult = filteredEmojis()

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-4 justify-evenly p-8`}
    >
      <div className="search-container  w-full flex items-center justify-center ">
        <input type="text" className={`outline-slate-50 border-slate-50 p-2 ${style.inputElement}`} value={userInput} placeholder="Search..." onChange={runSearch}/>
      </div>
      
      <div className={`${style.emojiContainer} p-2`}>
        {
          ( filteredEmojisResult.length === 0)
            ? <p>Emoji that match your keyword is not available, write something else please</p>

            : filteredEmojisResult.map(emoji => 

            <div key={emoji.title} className={` ${style.gridItem} flex-col items-center justify-center text-center p-4 bg-slate-300`}>
              <h4>{emoji.title}</h4>
              <span>{emoji.symbol}</span>
            </div>

          ).slice(0,20)
        }
      </div>
    </main>
  )
}
