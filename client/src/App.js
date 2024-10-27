import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';
import CalendarPage from './pages/Calendar';
import Mypage from './pages/Mypage';

import './App.css';
function App() {
  return (
      <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/calendar' element={<CalendarPage />} />
                  <Route path='/mypage' element={<Mypage />} />
            </Routes>
        </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App;
