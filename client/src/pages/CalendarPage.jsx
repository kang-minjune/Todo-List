import React, { useContext } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';

import Calendar from 'react-calendar';

import '../styles/calendar.scss'

const CalendarPage = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div>
            {user? (
                <>
                    <div className='calender-page'>
                        <Header />
                        <div className='calender-container'>
                            <Calendar />
                        </div>
                        <Footer />

                    </div>
                </>) : ( 
                <Login /> 
            )}
        </div>
        
    );
};

export default CalendarPage;