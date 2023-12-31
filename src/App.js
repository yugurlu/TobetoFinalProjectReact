
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.css'
import { Register } from './pages/register/register';
import { Lecture } from './components/lecture/lecture';
import Appeal from './components/Appeal/appeal';
import Exam from './components/Exams/exam';


function App() {
  return (
    <div class="snow_wrap">
        <div class="snow"></div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } ></Route>
        <Route path='/login' element={ <Login/> } ></Route>
        <Route path='/register' element={ <Register/> } ></Route>
        <Route path='/appeal' element={ <Appeal/> }></Route>
        <Route path='/exam' element={ <Exam/> }></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
