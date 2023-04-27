import React, { useState } from 'react'
import style from '../../styles/Home.module.css'

const RegisterForm = () => {
  const[userName,setUserName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  function handleSubmit(e:any){
    e.preventDefault()
    console.log(userName,email,password);
  }
  return (
    <form className={` flex item-center flex-col gap-3 ${style.form}`} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id='username' className={style.input} onChange={(e)=>setUserName(e.target.value)}/>
      {userName}
      <label htmlFor="email">Email</label>
      <input type="email" id='email' className={style.input} onChange={(e)=>setEmail(e.target.value)}/>
      {email}
      <label htmlFor="password">Password</label>
      <input type="password" id='password' className={style.input} onChange={(e)=>setPassword(e.target.value)}/>
      {password}
      <button type='submit' id={style.button}>Register</button>
    </form>
  )
}

export default RegisterForm