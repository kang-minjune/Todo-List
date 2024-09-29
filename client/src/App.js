import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';
import Calendar from './pages/Calendar';
import Mypage from './pages/Mypage';

import './App.css';
function App() {
  return (
    <BrowserRouter>
         <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/list' element={<List />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/mypage' element={<Mypage />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
