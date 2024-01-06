import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.css";
import { Register } from "./pages/register/register";
import { Lecture } from "./components/lecture/lecture";
import Appeal from "./components/Appeal/appeal";
import Exam from "./components/Exams/exam";
import ExpandDisplay from "./pages/ExpandDisplay/expandDisplay";
import { Navbar } from "./layouts/Navbar/navbar";
import LectureDetail from "./pages/LectureDetail/LectureDetail";

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/:items" element={<ExpandDisplay />}></Route>
          <Route path="/LectureDetail" element={<LectureDetail />}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
