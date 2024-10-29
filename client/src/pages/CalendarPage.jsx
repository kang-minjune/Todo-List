import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Calendar from 'react-calendar';

import '../styles/calendar.scss'

const CalendarPage = () => {
    return (
        <div className='calender-page'>
            <Header />
            <div className='calender-container'>
                <Calendar />
            </div>
            <Footer />
        </div>
    );
};

export default CalendarPage;