import React from 'react'

function Summary() {
    return (
        <div className=" flex h-screen justify-center items-center">
            <div className='m-20'>
                <h1 className='font-bold text-2xl'>Here is a summary of your email</h1>
                <div className="mt-5 justify-center items-center">
                    <div>
                    <p>
                    Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.
                    </p>
                    </div>
                    <div>
                    <button className=" mt-10 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Navigate To An Email To Start Writing</button>
                    </div>
                </div>
            </div>
      </div>
      )
}

export default Summary