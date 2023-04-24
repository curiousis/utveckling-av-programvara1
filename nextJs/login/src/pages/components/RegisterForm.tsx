import React from 'react'
import style from '../../styles/Home.module.css'

const RegisterForm = () => {
  return (
    <form className={` flex item-center flex-col gap-3 ${style.form}`}>
      <label htmlFor="username">Username</label>
      <input type="text" id='username' className={style.input}/>
      <label htmlFor="email">Email</label>
      <input type="email" id='email' className={style.input}/>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' className={style.input}/>
      <button type='button' id={style.button}>Register</button>
    </form>
  )
}

export default RegisterForm