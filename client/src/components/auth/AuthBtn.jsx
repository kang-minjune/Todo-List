import React from 'react';
import { NavLink } from 'react-router-dom';
import'../auth/styles/auth-btn.scss'

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */

function AuthBtn ({ btnNavi, btnClassName, btnText, btnOnClick}) {
    return (
        <div> 
            <NavLink
                    to={btnNavi}
                    className='auth-navlink'
                >
                    <button
                        className = {btnClassName}
                        onClick={btnOnClick}
                    >  
                

                        {btnText} 
                    </button> 
            </NavLink>     
        </div>
   
    );
};

export default AuthBtn;