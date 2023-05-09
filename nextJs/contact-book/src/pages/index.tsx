
import { FormEvent, useState } from 'react'
import style from '../styles/Home.module.css'



export default function Home() {
    const [contacts,setContact] = useState([
      {
        name:'Isra Banda',
        phonenumber:'0134324324',
      },
      {
        name:'Sara Ben',
        phonenumber:'0423235421'},
      {
        name:'John Sam',
        phonenumber:'0423432343'
      }
    ])
    const [name,setName]=useState('')
    const [phonenumber,setPhonenumber]= useState('')

    function deleteObject(e:any){
      e.target.parentElement.parentElement.remove();  
    }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${style.main}`}
    >
      <div className={`flex justify-evenly items-center ${style.inputContainer}`}>
        <input placeholder='name'onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='phone number' onChange={(e)=>setPhonenumber(e.target.value)}/>
        <button onClick={()=>setContact([...contacts,{name:name,phonenumber:phonenumber}])}> Add </button>
      </div>
      <h2 className={style.heading}>Contacts</h2>
      <table className={` text-center ${style.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact=>
            <tr>
              <td>{contact.name}</td>
              <td>{contact.phonenumber}</td>
              <td><button onClick={deleteObject}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  )
}

