import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { HashRouter, Route, Routes } from "react-router-dom";
import Question from "./Components/Question";
import Summary from "./Components/Summary";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question" element={<Question />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
