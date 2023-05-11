
import { FormEvent, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Modal from '@/components/Modal'


type ContactsDefination = {
  name:string;
  phonenumber:string
}
export default function Home() {
    const [contacts,setContact] = useState<ContactsDefination[]>([])
    const [isOpen,setIsOpen] = useState(false)

    useEffect(()=>{
      const local = JSON.parse(localStorage.getItem('contacts')!)
      setContact([
        { name:'Isra Banda',phonenumber:'0134324324',},
        {name:'Sara Ben',phonenumber:'0423235421'},
        {name:'John Sam',phonenumber:'0423432343'}
      ])
    },[])

    const [name,setName]=useState('')
    const [phonenumber,setPhonenumber]= useState('')

    function addContact(){
      const newContacts = [...contacts,{name:name,phonenumber:phonenumber}];
      setContact(newContacts);
      localStorage.setItem('contacts',JSON.stringify(newContacts))
      setIsOpen(false)
    }

    function deleteObject(index : number){
      const newContacts = [...contacts];
      newContacts.splice(index,1)
      setContact(newContacts) 
      localStorage.setItem('contacts',JSON.stringify(newContacts))
    }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${style.main}`}
    >
      <h2 className={style.heading}>Contacts</h2>

      <button onClick={()=>setIsOpen(true)}>Add Contact</button>

      <table className={` text-center ${style.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact,i)=>
            <tr key={contact.name + contact.phonenumber}>
              <td>{contact.name}</td>
              <td>{contact.phonenumber}</td>
              <td><button onClick={()=>deleteObject(i)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
        <div className={`flex justify-evenly items-center flex-col ${style.inputContainer}`}>
          <input placeholder='name'onChange={(e)=>setName(e.target.value)}/>
          <input placeholder='phone number' onChange={(e)=>setPhonenumber(e.target.value)}/>
          <button onClick={addContact}> Add </button>
        </div>
      </Modal>
    </main>
  )
}

