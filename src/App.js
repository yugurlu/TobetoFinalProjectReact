
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.css'
import { Register } from './pages/register/register';
import { Lecture } from './components/lecture/lecture';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } ></Route>
        <Route path='/login' element={ <Login/> } ></Route>
        <Route path='/register' element={ <Register/> } ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
