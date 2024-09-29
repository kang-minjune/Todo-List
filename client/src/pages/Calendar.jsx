import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../styles/calendar.scss'

const Calendar = () => {
    return (
        <div className='calender-page'>
            <Header />
                <span>달력 페이지</span>
                <span>달력 페이지</span>
                <span>달력 페이지</span>
            <Footer />
        </div>
    );
};

export default Calendar;