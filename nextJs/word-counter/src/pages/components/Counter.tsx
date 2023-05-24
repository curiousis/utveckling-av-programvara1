import React,{ useState} from "react";
import counter from './Counter.module.css'
export default function Counter() {
    const [text,setText] = useState('')
    const wordCount = text.length === 0 ? 0 : text.trim().split(/\s+/).length
    const characterCount = text.length
    const characterCountWithoutWhiteSpace =text.replace(/\s/g,'').length

    const textChange = (event:any)=> setText(event.target.value)

    return (
      <div  className={`flex text-lg min-h-screen flex-col items-center justify-evenly ${counter.main}`}>
        <textarea className={`border  border-black rounded-lg outline-amber-50 outline p-4 ${counter.textarea}`} value={text} cols={30} rows={10} onChange={textChange}></textarea>
        <div>
            <p>Word Count : <span className="font-semibold text-red-400">{wordCount}</span></p>
            <p>Character Count : <span className="font-semibold text-red-400">{characterCount}</span></p>
            <p>Character count without spaces : <span className="font-semibold text-red-400">{characterCountWithoutWhiteSpace}</span></p>
        </div>
      </div>
    )
}

