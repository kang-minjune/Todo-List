import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Login from './pages/Login';
import List from './pages/List';
import Calendar from './pages/Calendar';
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
         <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/list' element={<List />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/mypage' element={<Mypage />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
