import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import ListHome from './pages/ListHome';

function App() {
  return (
    <BrowserRouter>
         <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<ListHome />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
