import React, { useState } from 'react';
import '../footer/footer.scss'

const Footer = () => {
    const [clickedListBtn,setClickedListBtn] = useState(true);
    const [clickedCalenderBtn,setClickedCalenderBtn] = useState(true);
    const [clickedMypageBtn,setClickedMypageBtn] = useState(true);

    const clickedListBtnHandler = () => {
        setClickedListBtn(!clickedListBtn);
    }

    const clickedCalenderBtnHandler = () => {
        setClickedCalenderBtn(!clickedCalenderBtn);
    }

    const clickedMypageBtnHandler = () => {
        setClickedMypageBtn(!clickedMypageBtn);
    }

    return (
        <div className='footer-container'>
            <div className="buttons">

                <button className='button' onClick={clickedListBtnHandler}>
                    {clickedListBtn? (
                        <img src='./icons/footer/list/list-on.png' width="35px" height="35px"/>
                    ) : (
                        <img src='./icons/footer/list/list-off.png' width="35px" height="35px"/>
                    )}
                </button>
                <button className='button' onClick={clickedCalenderBtnHandler}>
                    {clickedCalenderBtn? (
                        <img src='./icons/footer/calender/calender-on.png' width="40px" height="40px"/>
                    ) : (
                        <img src='./icons/footer/calender/calender-off.png' width="40px" height="40px"/>
                    )}
                </button>
                <button className='button' onClick={clickedMypageBtnHandler}>
                    {clickedMypageBtn? (
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