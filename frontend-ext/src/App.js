import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import Question from "./Components/Question";
import Summary from "./Components/Summary";
import EmailInput from "./Components/EmailInput";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Summary />} />
=======
          <Route path="/" element={<Question />} />
>>>>>>> 7537be3967556da00369b32eae349ff2de96354c
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question" element={<Question />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/email" element={<EmailInput />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
