import { useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export default function IndexPage(){
  const [isEditMode,setIsEditMode] = useState(false)
  const [title,setTitle] = useLocalStorageState('title', { defaultValue :''})
  const [content,setContent] = useLocalStorageState('content',{defaultValue:''})
  return(
    <>
      <h1>Notes</h1>
      {!isEditMode && (
        <>
          <h2>{title}</h2>
          <div>{content}</div>
          <button onClick={()=>setIsEditMode(true)}>Change</button>
        </>
      )

      }
      {isEditMode && (
        <>
          <label className="flex flex-col m-1 max-w-700">
            <span>Title</span>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
          </label>
          <label className="flex flex-col m-1 max-w-700">
            <span>Content</span>
            <textarea className="h-30" value={content} onChange={e=>setContent(e.target.value)}/>
          </label>

          <button onClick={()=>setIsEditMode(false)}>Close</button>
        </>
      )}

    </>
  )
}
