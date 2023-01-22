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
      </div>
    </div>
  );
}

export default Summary;
