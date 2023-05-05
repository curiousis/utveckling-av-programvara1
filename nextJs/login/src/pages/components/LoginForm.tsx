import React,{FormEvent, useState} from 'react'
import style from '../../styles/Home.module.css'
import { data } from 'autoprefixer';

const LoginForm = () => {

  const[email,setEmail] =useState('');
  const [password,setPassword] = useState('')
  const [visible,setVisible]= useState(false)
  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    //setVisible(true)
    const users = await fetchData();
    await validateUser(users)
  }

  async function fetchData(){
    const response = await fetch('http://10.111.3.78:3000/api/users')
    const data:[any] = await response.json()
    return data
  }

  async function validateUser(data:any[]){
    data.includes(data.find(user => user.email === email)) ? window.location.href = '/profile' : null
  }

  return (
    <div>
      <form className={` flex item-center flex-col w-75 justify-center gap-3 ${style.form}`} onSubmit={handleSubmit}>
          <label htmlFor="email">Username</label>
          <input type="text" id='email'className={style.input} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className={style.input} onChange={(e)=>setPassword(e.target.value)}/>  
          <button type='submit' id={style.button}>Login</button>
      </form>
      { 
      visible ? 
        <div className='w-[50%] h-[50%] shadow-md rounded-md'>
          <h2 className='text-xl'>You're signed in as :</h2><span className='text-xl text-amber-700'>{email}</span>
          <div className="mb-3"></div>
          <h2 className='text-xl'>And your password is </h2><span className='text-xl text-amber-700'>{password}</span>
          <button onClick={()=>setVisible(false)}>Close</button>
        </div>
      : null
      }

    </div>
  )
}

export default LoginForm