import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../styles/mypage.scss'

const Mypage = () => {
    return (
        <div className='my-page'>
            <Header/>
                <span>마이 페이지</span>
                <span>마이 페이지</span>
                <span>마이 페이지</span>
            <Footer/>
        </div>
    );
};

export default Mypage;