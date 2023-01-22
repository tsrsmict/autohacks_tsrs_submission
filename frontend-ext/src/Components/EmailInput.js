import React from 'react'

function EmailInput() {
    return (
        <div className=" flex h-screen justify-center items-center">
          <div className='m-20'>
            <div className="  flex-col justify-center items-center bg-white px-20 pt-8 pb-24 rounded-lg">
              <div>
              <form className=' w-96'>
                <div className="flex flex-col">
                  <label className='text-md italic font-bold' htmlFor="email">Please enter the content of your email</label>
                  <textarea rows={10} cols={50} className='border border-2 h-50 shadow-xl bg-white text-black rounded-md p-2 mt-3'  type={'text'} />
                </div>
                
              </form>
              </div>
            
            <div className='items-center text-center'>
            <a href='/question'><button  className="mx-auto mt-2 border border-2 bg-black hover:bg-white text-white hover:text-black  bottom-20 hover:bg-white  font-bold py-2 px-5 mt-8 rounded-xl shadow-2xl">Next</button></a>
          </div>
        </div>
      </div>
    
      
      </div>
      )
}

export default EmailInput