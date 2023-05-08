import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import style from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [contact,setContact] = useState([{
      name:'Isra Banda',
      phonenumber:'0134324324',
  },{
    name:'Sara Ben',
    phonenumber:'0423235421'},{
    name:'John Sam',
    phonenumber:'0423432343'
  }])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center`}
    >
      <h2 className={style.heading}>Contacts</h2>
      <table className={` text-center ${style.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contact.map(contact=>
            <tr>
              <td>{contact.name}</td>
              <td>{contact.phonenumber}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className={style.button}>Add Contact</button>
    </main>
  )
}
