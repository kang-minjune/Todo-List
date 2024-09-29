import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import '../styles/list.scss'

const List = () => {
    return (
        <div className='list-page'>   
                <Header />
                    <span>리스트 페이지</span>
                    <span>리스트 페이지</span>
                    <span>리스트 페이지</span>
                <Footer/>
        </div>
    );
};

export default List;