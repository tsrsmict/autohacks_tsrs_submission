import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signupform", {
        email,
        pwd,
        confirm
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className='m-30'>
        <div className="  flex-col justify-center items-center bg-white px-20 pt-8 pb-24 rounded-lg">
          <h2 className='font-bold text-6xl m-2 text-center'>
            Sign Up
          </h2>
          <div>
          <form className=' w-96'>
            <div className="flex flex-col">
              <label className='text-md italic font-bold' htmlFor="email">Email</label>
              <input className='border border-2 border black shadow-xl bg-white text-black rounded-md p-2 mt-3' name='email' id='email' value={email} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col mt-8">
              <label className='text-md italic font-bold' htmlFor="pwd">Password</label>
              <input className='bg-white border border-2 shadow-xl text-black rounded-md p-2 mt-5' name="pwd" value={pwd} type={'password'} onChange={(e)=> setPwd(e.target.value)}/>
            </div>
            <div className="flex flex-col mt-12">
              <label className='text-md italic italic font-bold' htmlFor="pwd">Confirm Password</label>
              <input className='bg-white border border-2 shadow-xl text-black rounded-md p-2 mt-5' name="pwd" value={confirm} type={'password'} onChange={(e)=> setConfirm(e.target.value)}/>
            </div>
          </form>
          </div>
        <a className='hover:underline italic' href='/login'><h1 className=' text-center mt-7'>Already Have An Account? Login!</h1></a>
        <div className='items-center text-center'>
        <button onClick={(e) => handleSubmit(e)} className="mx-auto mt-2 border border-2 bg-black hover:bg-white text-white hover:text-black  bottom-20 hover:bg-white  font-bold py-2 px-5 mt-8 rounded-xl shadow-2xl">Sign Up</button>
      </div>
    </div>
  </div>

  
  </div>
  )
}


export default Signup