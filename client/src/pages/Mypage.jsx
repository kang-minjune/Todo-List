import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import { AuthContext } from '../context/AuthContext';

import '../styles/mypage.scss';
import axios from 'axios';
import Login from './Login';

const Mypage = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (apiUrl && user) {
            const userGet = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/auth/login/${user._id}`);
                    if (response && response.data) {
                        setUserData(response.data);
                    }
                } catch (err) {
                    console.error(err);
                }
            };
            userGet();
        } else {
            console.error('API URL or user is not defined');
        }
    }, [apiUrl, user]);

    const logoutHandler = async () => {
        try {
            const response = await axios.post(`${apiUrl}/auth/logout`);
            if (response && response.data) {
                localStorage.removeItem('user');
                setUserData(null);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {user? (
                <>
                  <Header />
                  <div className='my-page'>
                      <div className='container'>
                          <img src="../profile.png" alt="지정 프로필" />
                          <span>{userData ? `${userData.name}님 안녕하세요. 반갑습니다.` : '로그인 해주세요.'}</span>
                          <button className='logout-button' onClick={logoutHandler}>로그아웃</button>
                      </div>
                  </div>
                  <Footer />
                </>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Mypage;