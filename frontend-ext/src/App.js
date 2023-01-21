import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"

function App() {
  return (
      <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
