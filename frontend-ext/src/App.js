<<<<<<< HEAD
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { HashRouter, Route, Routes } from "react-router-dom";
import Question from "./Components/Question";
import Summary from "./Components/Summary";
=======

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Question from './Components/Question';
import Summary from './Components/Summary';
import EmailInput from './Components/EmailInput';
>>>>>>> 47ca45958ea83c41d781ce9d196d04180391e065

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question" element={<Question />} />
          <Route path="/summary" element={<Summary />} />
=======
        <Route path="/" element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/question' element={<Question />} />
         <Route path='/summary' element={<Summary />} />
         <Route path='/email' element={<EmailInput />}></Route>
>>>>>>> 47ca45958ea83c41d781ce9d196d04180391e065
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
