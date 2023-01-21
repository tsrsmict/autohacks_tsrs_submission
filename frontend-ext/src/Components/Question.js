import React from 'react'

function Question() {
    return (
        <div className=" flex h-screen justify-center items-center">
            <div className='m-30'>
                <h1>Whatever Question?</h1>
                <div className=" justify-center items-center">
                    <div>
                    <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Option 1</button>
                    </div>
                    <div>
                    <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Option 2</button>
                    </div>
                    <div>
                    <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Option 3</button>
                    </div>
                    <div>
                    <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Option 4</button>
                    </div>
                </div>
            </div>
      </div>
      )
}

export default Question