import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import Profile from "./pages/Profile/Profile";
import { Navbar } from "./layouts/Navbar/navbar";
import { Register } from "./pages/register/register";
import ExpandDisplay from "./pages/ExpandDisplay/expandDisplay";
import LectureDetail from "./pages/LectureDetail/LectureDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/home/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/basvurularim" element={<ExpandDisplay />}></Route>
        <Route path="/egitimlerim" element={<ExpandDisplay />}></Route>
        <Route path="/duyurularim" element={<ExpandDisplay />}></Route>
        <Route path="/anketlerim" element={<ExpandDisplay />}></Route>
        <Route path="/sinavlarim" element={<ExpandDisplay />}></Route>
        <Route path="/profilim" element={<Profile />}></Route>
        <Route path="/ders-detay/:name" element={<LectureDetail />}></Route>
        <Route path='*' element={<small>404</small>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
