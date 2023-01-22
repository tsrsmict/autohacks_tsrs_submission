<<<<<<< HEAD
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Summary() {
  const { summary, setSummary } = useState("");
  async function getData() {
    axios
      .get("http://localhost:5000/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSummary(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="m-20">
        <h1 className="font-bold text-2xl">Here is a summary of your inbox!</h1>
        <div className="mt-5 justify-center items-center">
          <div>
            <p>* {summary}</p>
          </div>
          <div>
            <a href="/email">
              {/* <button className=" mt-10 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">
                Summarize Another Email
              </button> */}
            </a>
          </div>
        </div>
=======
import React from 'react'
import axios from 'axios'
async function getdata() {
    try {
        const res = await axios.get("http://localhost:5000/summary");
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err);
    }
}
const data = getdata()
function Summary() {
    const [summary] = React.useState(data)
    return (
        <div className=" flex h-screen justify-center items-center p-5">
            <div className='m-20'>
                <h1 className='font-bold text-2xl'>Here is a summary of your emails of yesterday</h1>
                <div className="mt-5 justify-center items-center">
                    <div>
                    <p>
                    Good morning John, 
It's time to get your day started! Don't forget to RSVP by May 31st for the company picnic in Dubai on Saturday, June 12th. You're also invited to a party next weekend at [location], make sure you let Stacy know if you're coming. I'm sure Smith would appreciate your help in resolving the issues with the order they placed with your company (order number 09290822121). Rick is also hoping to catch up with you over coffee sometime next week. Last but not least, welcome Arjun who will be joining our team as a Senior JavaScript Developer on Monday. Have a great day!
                  </p>
                    </div>
                    <div>
                    <a href="/email"><button className=" mt-10 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">Summarize Another Email</button></a>
                    </div>
                </div>
            </div>
>>>>>>> 7537be3967556da00369b32eae349ff2de96354c
      </div>
    </div>
  );
}

export default Summary;
