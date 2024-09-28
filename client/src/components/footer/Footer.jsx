import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../footer/footer.scss'

const Footer = () => {
    const [clickedButton, setClickedButton] = useState('list');

    const handleButtonClick = (buttonClassName) => {
        setClickedButton(buttonClassName);
    }

    return (
        <div className='footer-container'>
            <div className="buttons">
                <NavLink to={'/home'}>
                    <button className='button' onClick={() => handleButtonClick('list')}>
                        {clickedButton === 'list' ? (
                            <img src='./icons/footer/list/list-on.png' width="35px" height="35px"/>
                        ) : (
                            <img src='./icons/footer/list/list-off.png' width="35px" height="35px"/>
                        )}
                    </button> 
                </NavLink>
                <button className='button' onClick={() => handleButtonClick('calender')}>
                    {clickedButton === 'calender' ? (
                        <img src='./icons/footer/calender/calender-on.png' width="40px" height="40px"/>
                    ) : (
                        <img src='./icons/footer/calender/calender-off.png' width="40px" height="40px"/>
                    )}
                </button>
                <button className='button' onClick={() => handleButtonClick('mypage')}>
                    {clickedButton === 'mypage' ? (
                        <img src='./icons/footer/mypage/mypage-on.png' width="35px" height="35px"/>
                    ) : (
                        <img src='./icons/footer/mypage/mypage-off.png' width="35px" height="35px"/>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Footer;