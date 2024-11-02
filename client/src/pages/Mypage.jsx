import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from './Login';

import UserEdit from '../components/user/UserEdit';

import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


import '../styles/mypage.scss';

const Mypage = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);
    const [userEditData, setUserEditData] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (apiUrl && user) {
            const userGet = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/user/read/${user._id}`);
                    if (response && response.data) {
                        setUserEditData(response.data);
                    }
                } catch (err) {
                    console.error(err);
                }
            };
            userGet();
        } else {
            console.error('API URL or user is not defined');
        }
    }, [apiUrl]);

    const logoutHandler = async () => {
        try {
            const response = await axios.post(`${apiUrl}/auth/logout`);
            if (response && response.data) {
                localStorage.removeItem('user');
                setUserData(null);
                window.location.replace('/');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {user? (
                <>
                  <div className='my-header'>
                    <Header />
                    <div className='my-page'>
                        <div className='container'>
                            <div className='form1'>
                                <img src="../profile.png" alt="지정 프로필" />
                                <span>{userEditData.realname}님 안녕하세요</span>
                            </div>
                            <div className='form2'>
                                <UserEdit/>
                                <button className='logout-button' onClick={logoutHandler}>로그아웃</button>
                            </div>
                            
                        </div>
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