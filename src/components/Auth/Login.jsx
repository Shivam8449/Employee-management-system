import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)

  }
  return (
   <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
    <h1>Please refer the readme.md file for the login credentials </h1>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col items-center justify-center'>
        <input value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl mt-3' type="email" placeholder='Enter your Email' />
        <input value={password} onChange={(e) => {
          setPassword(e.target.value)
        }}
         className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl mt-3' type="password" placeholder='Enter your password'/> 
        <button className=' mt-7 px-25 border-2 hover:bg-emerald-600 border-emerald-600 rounded-full py-4 px-5 text-xl mt-3 cursor-pointer' >Login</button>
      </form>
    </div>
   </div>
  )
}

export default Login