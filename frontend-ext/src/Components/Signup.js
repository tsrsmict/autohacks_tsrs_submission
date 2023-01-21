import React from 'react'
import GoogleLogin from './google_utils'
function Signup() {
  return (
    <div className=" flex h-screen justify-center items-center">
        <div className=''>
            <GoogleLogin />
            <h1>Already have an account? Login!</h1>
            <button className="mt-2 ml-20 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Signup</button>
        </div>
  </div>
  )
}

export default Signup