import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import style from '../../styles/Home.module.css'

const index = () => {
  const [counter,setCounter] =useState(0)
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center w-full ${style.main}`}>
     <LoginForm/>
     
    </main>
  )
}

export default index