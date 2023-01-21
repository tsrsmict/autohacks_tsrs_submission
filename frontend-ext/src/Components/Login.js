import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/submitform", {
        email,
        pwd,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className=" flex h-screen justify-center items-center">
        <div>
        <div className="flex-col justify-center items-center bg-black px-20 pt-8 pb-24 rounded-lg text-white">
          <h2 className='font-bold text-6xl m-16 text-center'>
            Login
          </h2>
          <form className='text-white w-96'>
            <div className="flex flex-col">
              <label className='text-2xl font-bold' htmlFor="email">Email</label>
              <input className='bg-gray-300 rounded-md p-2 mt-5' name='email' id='email' value={email} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col mt-12">
              <label className='text-2xl font-bold' htmlFor="pwd">Password</label>
              <input className='bg-gray-300 rounded-md p-2 mt-5' name="pwd" value={pwd} type={'password'} onChange={(e)=> setPwd(e.target.value)}/>
              </div>
          </form>

        <h1 className='text-center p-5'>Don't have an account? <a href='/signup'>Sign Up!</a></h1>
        <div className='items-center text-center'>
        <button onClick={(e) => handleSubmit(e)} className="mx-auto mt-2 bg-stone-300 hover:shadow-stone-400 bottom-20 hover:bg-white text-black font-bold py-2 px-5 mt-8 rounded">Login</button>
  </div>
  </div>
  </div>

  
  </div>
  )
}


export default Login
