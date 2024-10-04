import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import '../styles/list.scss'

const List = () => {
    return (
        <div className='list-page'>   
          <div className='container'>
             <Header />
                    <span>리스트 페이지</span>
                    <span>리스트 페이지</span>
                    <span>리스트 페이지</span>
              <Footer/>
          </div>
                
        </div>
    );
};

export default List;