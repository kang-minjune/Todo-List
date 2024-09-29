import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../footer/footer.scss';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const clickedButtonState = () => {
        switch (location.pathname) {
            case '/list':
                return 'list';
            case '/calendar':
                return 'calendar';
            case '/mypage':
                return 'mypage';
            default:
                return 'list';
        }
    };

    const [clickedButton, setClickedButton] = useState(clickedButtonState());

    const handleButtonClick = (buttonClassName, path) => {
        setClickedButton(buttonClassName);
        navigate(path);  // Navigate immediately
    };

    return (
        <div className='footer'>
            <div className='container'>
                <div className="buttons">
                    {/* 리스트 버튼 */}
                    <button 
                        type='button'
                        className='button' 
                        onClick={() => handleButtonClick('list', '/list')}
                    >
                        {clickedButton === 'list' ? (
                            <img src='./icons/footer/list/list-on.png' width="35px" height="35px" />
                        ) : (
                            <img src='./icons/footer/list/list-off.png' width="35px" height="35px" />
                        )}
                    </button>

                    {/* 캘린더 버튼 */}
                    <button 
                        type='button'
                        className='button' 
                        onClick={() => handleButtonClick('calendar', '/calendar')}
                    >
                        {clickedButton === 'calendar' ? (
                            <img src='./icons/footer/calender/calender-on.png' width="40px" height="40px" />
                        ) : (
                            <img src='./icons/footer/calender/calender-off.png' width="40px" height="40px" />
                        )}
                    </button>

                    {/* 마이페이지 버튼 */}
                    <button 
                        type='button'
                        className='button' 
                        onClick={() => handleButtonClick('mypage', '/mypage')}
                    >
                        {clickedButton === 'mypage' ? (
                            <img src='./icons/footer/mypage/mypage-on.png' width="35px" height="35px" />
                        ) : (
                            <img src='./icons/footer/mypage/mypage-off.png' width="35px" height="35px" />
                        )}
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;