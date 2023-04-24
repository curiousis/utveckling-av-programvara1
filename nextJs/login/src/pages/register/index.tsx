import React from 'react'
import RegisterForm from '../components/RegisterForm'
import style from '../../styles/Home.module.css'
const index = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center w-full ${style.main}`}>
        <RegisterForm/>
    </main>
  )
}

export default index