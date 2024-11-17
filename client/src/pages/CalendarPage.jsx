import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';

import Calendar from 'react-calendar';

import axios from 'axios';

import '../styles/calendar.scss';

const CalendarPage = () => {
    const [event, setEvent] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);

    const userId = user?._id;

    useEffect(() => {
        console.log(apiUrl);
        console.log(userId);

        const calendarDataGet = async () => {
            if (!userId) return;
            try {
                const response = await axios.get(`${apiUrl}/list/read/${userId}`);
                console.log(response.data);
                setEvent(response.data.map(event => ({
                    listitem: event.listitem,
                    start: event.createdate,
                    end: event.enddate
                })));
            } catch (error) {
                console.error("Failed to calendar data", error);
            }
        };

        calendarDataGet();
    }, [apiUrl, userId]);

    return (
        <div>
            {user ? (
                <>
                    <div className="calender-page">
                        <Header />
                        <div className="calender-container">
                            <Calendar
                                tileContent={({ date, view }) => {
                                    const dayEvents = event.filter(
                                        event =>
                                            new Date(event.start).toDateString() === date.toDateString()
                                    );

                                    return (
                                        <>
                                            {dayEvents.map((event, index) => (
                                                <p key={index}>{event.listitem}</p>
                                            ))}
                                        </>
                                    );
                                }}
                            />
                        </div>
                        <Footer />
                    </div>
                </>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default CalendarPage;