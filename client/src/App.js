import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import ListHome from './pages/ListHome';
import Calendar from './pages/Calendar';
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
         <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/list' element={<ListHome />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/mypage' element={<Mypage />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
