import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.css";
import { Register } from "./pages/register/register";
import { Lecture } from "./components/Lecture/lecture";
import Appeal from "./components/Appeal/appeal";
import Exam from "./components/Exams/exam";
import ExpandDisplay from "./pages/ExpandDisplay/expandDisplay";
import { Navbar } from "./layouts/Navbar/navbar";
import LectureDetail from "./pages/LectureDetail/LectureDetail";
import LectureDetailSidebar from "./components/LectureDetailSidebar/LectureDetailSidebar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/:items" element={<ExpandDisplay />}></Route>
        <Route path="/profilim" element={<Profile />}></Route>
        <Route path="/ders-detay/:name" element={<LectureDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
