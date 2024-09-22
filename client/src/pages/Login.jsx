import React, { useState, useContext } from "react";

import AuthBtn from '../components/auth/AuthBtn';
import AuthCheckbox from '../components/auth/AuthCheckbox';
import AuthInput from '../components/auth/AuthInput';

import { NavLink } from 'react-router-dom';
import '../styles/login.scss';

/**
 * 로그인 페이지 
 * @returns
 */
const Login = () => {

  return (
    <div className="login-form">
      <div className="login-container">
        {/* 로그인 메인 폼 */}
        <div className="login-contents">
          <div className="login-logo-box">
            <NavLink to={'/'} className='login-home-logo'>
                 <span className="login-youth"><img src='./QuickListLogo.png' width="110px" height="80px" /></span>
            </NavLink>
          </div>

          <div className="login-input-form">
            <AuthInput
              formClassName="input-id-bar"
              imgSrc={"./icons/idlogo.png"}
              imgAlt="로그인 아이콘"
              inputType="text"
              inputClassName="login-id-input"
              inputPlaceHolder="아이디"
              id={"userId"}
            //   inputOnChange={handleChange}
            />


            <AuthInput
              formClassName="input-pw-bar"
              imgSrc={"./icons/pwlogo.png"}
              imgAlt="로그인 아이콘"
              inputType="password"
              inputClassName="login-pw-input"
              inputPlaceHolder="비밀번호"
            //   inputOnChange={handleChange}
              id={"password"}
            //   authOnKeyDown={(e)=>(e.key === "Enter" ) ? loginBtnClickHandler() : ""}
            />
          </div>

          <div className="login-maintain-container">
            <AuthCheckbox inputType="checkbox" checkBoxText="로그인 상태 유지" />
          </div>

          <AuthBtn
            btnClassName="login-btn"
            btnText="로그인"
            // btnOnClick={loginBtnClickHandler}
          />

          <div className="login-userfind-register">

            <NavLink className={'find-id'} to={'/userfind'} >아이디 찾기</NavLink>
            <NavLink className={'find-pw'} to={'/userfind'}>비밀번호 찾기</NavLink>
            <NavLink className={'go-register'} to={'/register'}>회원가입</NavLink>

          </div>

         
          </div>
        </div>
      </div>
  );
};

export default Login;
