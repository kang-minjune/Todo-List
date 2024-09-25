import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AuthBtn from '../components/auth/AuthBtn';
import AuthInput from '../components/auth/AuthInput'
import AuthCheckbox from '../components/auth/AuthCheckbox'

import LoginHeader from '../components/header/authheader/LoginHeader';

import '../styles/login.scss';

/**
 * 로그인 페이지 
 * @returns
 */

const Login = () => {

  const [Authlogin, setAuthlogin] = useState({
     email: undefined,
     password: undefined,
  });
  
  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const loginClickHandler = async (e) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log(`API URL: ${apiUrl}`)
      const response = await axios.post(`${apiUrl}/auth/login`, Authlogin, { withCredentials: true });
      console.log(response.data);
      console.log("안녕하세요.")
      // dispatch({ type: "LOGIN", payload: response.data.user });
      alert(response.data.message);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("로그인 정보 잘못되었습니다. 다시 시도해주세요.")
      }
    }
  };

  const loginHandleChange = (e) => {
    setAuthlogin((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
 
  return (
    <div className='login-header-contents'>
      <LoginHeader/>
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
                  inputOnChange={loginHandleChange}
                />


                <AuthInput
                  formClassName="input-pw-bar"
                  imgSrc={"./icons/pwlogo.png"}
                  imgAlt="로그인 아이콘"
                  inputType="password"
                  inputClassName="login-pw-input"
                  inputPlaceHolder="비밀번호"
                  inputOnChange={loginHandleChange}
                  id={"password"}
                  authOnKeyDown={(e)=>(e.key === "Enter" ) ? loginClickHandler() : ""}
                />
              </div>

              <div className="login-maintain-container">
                <AuthCheckbox inputType="checkbox" checkBoxText="로그인 상태 유지" />
              </div>

              <AuthBtn
                btnClassName="login-btn"
                btnText="로그인"
                btnOnClick={loginClickHandler}
              />

              <div className="login-userfind-register">

                <NavLink className={'find-id'} to={'/userfind'} >아이디 찾기</NavLink>
                <NavLink className={'find-pw'} to={'/userfind'}>비밀번호 찾기</NavLink>
                <NavLink className={'go-register'} to={'/register'}>회원가입</NavLink>

              </div>

            
              </div>
            </div>
          </div>
      </div>
  );
};

export default Login;
