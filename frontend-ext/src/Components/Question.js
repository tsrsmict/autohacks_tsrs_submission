import React from 'react'
import axios from 'axios';
async function getdata() {
    try {
        const res = await axios.get("http://localhost:5000/questions");
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err);
    }
}
const data = getdata()
function Question() {
    const [question] = React.useState(data)
    return (
        <div className="h-screen justify-center items-center">
            <h1 className='text-4xl font-bold text-black p-5'>Question 1</h1>
            <div className='ml-12 mt-12'>
                <h1>What should be the subject of this email?</h1>
                <div className=" justify-center items-center">
                    <div>
                    <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">
    "Welcome Arjun to the Team"</button>
                    </div>
                    <div>
                    <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">    " Welcome Aboard Arjun",
</button>
                    </div>
                    <div>
                    <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">    " Welcome Senior JavaScript Developer Arjun"
</button>
                    </div>
                    <div>
                    <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">    " Welcome Senior JavaScript Developer Arjun"
</button>
                    </div>
                </div>
            </div>
      </div>
      )
}

export default Question