import React from "react";
import axios from "axios";
async function getdata() {
  try {
    const res = await axios.get("http://localhost:5000/questions");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
const stuff = [
  {
    question: "Do you think Arjun will be a great addition to the team?",
    options: ["Yes", "No"],
  },
  {
    question: "What should be the subject of this email?",
    options: [
      "Welcome Arjun!",
      " Welcome aboard",
      " Welcome to the team Arjun!",
      " Congratulations Arjun!",
      "Other",
    ],
  },
  {
    question: "What is the setting of the email?",
    options: ["Work", "Home", "School", "Other"],
  },
  {
    question: "What should be the tone of this email?",
    options: [
      "Happy",
      "Sad",
      "Angry",
      "Neutral",
      "Casual",
      "Formal",
      "Business",
      "Other",
    ],
  },
];
const data = getdata();
function Question() {
  var i = 2;
  const [question, setQuestion] = React.useState(stuff[i]);
  return (
    <div className="h-screen justify-center items-center">
      <h1 className="text-4xl font-bold text-black p-5">Generated Response</h1>
      <div className="ml-12 mt-12">
        <h1>{question.question}</h1>
        <div className=" justify-center items-center">
          <div>
            <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded"></button>
          </div>
          <div>
            <button className="ml-auto mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">
              {question.options[0]}
            </button>
          </div>
          <div>
            <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">
              {question.options[1]}
            </button>
          </div>
          <div>
            <button className=" mt-2 bottom-20 bg-black hover:bg-white border border-2 border-black hover:text-black text-white font-bold py-2 px-4 rounded">
              {question.options[2]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
