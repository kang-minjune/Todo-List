import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../styles/register.scss'

const Register = () => {
    return (
        <div className='register-page'>
            <Header />

            <div className='container'>
                    <label>아이디</label>
                    <input type='text'></input>
                    <label>이름</label>
                    <input type='text'></input>
                    <label>패스워드</label>
                    <input type='password'></input>
                    <label>패스워드 확인</label>
                    <input type='password'></input>
                    <label>성별</label>
                    <input type='text'></input>
                    <label>E-Mail</label>
                    <input type='email'></input>
                    <label>전화번호</label>
                    <input type='tel'></input>
                    <label>주소</label>
                    <input type='tel'></input>
                    <label>상세주소</label>
                    <input type='tel'></input>
            </div>

            <Footer />
        </div>
    );
};

export default Register;