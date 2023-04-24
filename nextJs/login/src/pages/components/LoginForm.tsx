import React from 'react'
import style from '../../styles/Home.module.css'
const LoginForm = () => {
  return (
  <form className={` flex item-center flex-col w-75 justify-center gap-3 ${style.form}`}>
      <label htmlFor="username">Username</label>
      <input type="text" id='username'className={style.input}/>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' className={style.input}/>  
      <button type='button' id={style.button}>Login</button>
    </form>
  )
}

export default LoginForm