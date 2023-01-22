import React from 'react'
import axios from 'axios'
function Summary() {
    const summary = axios.get('http://localhost:5000/summary')
    console.log(summary)
    return (
        <div className=" flex h-screen justify-center items-center">
            <div className='m-20'>
                <h1 className='font-bold text-2xl'>Here is a summary of your email</h1>
                <div className="mt-5 justify-center items-center">
                    <div>
                    <p>
                        this is my very loong text</p>
                    </div>
                    <div>
                    <a href="/email"><button className=" mt-10 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Summarize Another Email</button></a>
                    </div>
                </div>
            </div>
      </div>
      )
}

export default Summary