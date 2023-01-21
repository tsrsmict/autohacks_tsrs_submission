import React from 'react'

function Home() {
  return (
    <div className=" flex h-screen justify-center items-center">
        <div className=''>
            <div className='flex bottom-2 justify-center items-center'>
            <h1 className=''>Welcome!</h1>
            </div>
            <div className='mt-3'>
            <a href="/signup"><button className="bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Signup</button></a>
            <a href="/login"><button className="ml-2  bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Login</button></a>
            </div>
        </div>
  </div>
  )
}

export default Home