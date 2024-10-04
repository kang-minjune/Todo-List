import React, { useState } from 'react';
import Header from '../components/header/Header';
import RegisterFooter from '../components/footer/authfooter/RegisterFooter';
import AddressSearchBtn from '../components/auth/AddressSearchBtn';
import { useNavigate } from 'react-router-dom';


import '../styles/register.scss'
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        email: '',
        realname: '',
        phone: '',
        gender: '',
        address: '',
        addressdetail: '',
        passwordconfirm: '',
    });

    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    };
    const showPasswordConfirmHandler = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const registerBtnClickHandler = async (e) => {
        e.preventDefault();

        if (credentials.password !== credentials.passwordconfirm) {
                        alert("비밀번호가 일치하지 않습니다.");
                        return; // 비밀번호가 일치하지 않으면 이후 처리 중단
        }

        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(apiUrl);
            const response = await axios.post(`${apiUrl}/auth/register`, credentials);
            console.log(response.data); 
            
            
            
            if (response.data) {
                alert("회원가입에 성공하셨습니다! 로그인창으로 이동합니다.");
                navigate('/');
            }

        } catch (err) {
            console.error(err.response.data);
            alert("회원정보를 입력해주세요.");
        }
    };

    const handleGenderClick = (gender) => {
        setCredentials((prev) => ({ ...prev, gender }));
    };

    const registerHandleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleAddressSelect = (selectedAddress) => {
        setCredentials({...credentials, address: selectedAddress});
    };

    const LoginNav = () =>{
        navigate('/')
    }



    return (
        <div className='register-page'>
            <Header />

            <div className='container'>
                <label>아이디</label>
                <input id='username' type='text' onChange={registerHandleChange} placeholder='사용할 아이디를 작성해주세요.' />

                <label>이름</label>
                <input id='realname' type='text' onChange={registerHandleChange} placeholder='이름을 작성해주세요.' />


                <label>패스워드</label>
                <div className='password-div'>
                     <input
                        id='password'
                        type={showPassword ? 'password' : 'text'}
                        onChange={registerHandleChange}
                        placeholder='패스워드를 작성해주세요.'
                    />

                    <button onClick={showPasswordHandler} className='eyebtn'>
                        {showPassword ? (
                            <img src="./icons/eyeoff.png" alt="패스워드 보기 off" />
                        ) : (
                            <img src="./icons/eyeon.png" alt="패스워드 보기 on" />
                        )}
                    </button>
                </div>
               

                <label>패스워드 확인</label>
                <div className='password-div'>
                    <input 
                           id='passwordconfirm' 
                           type={showPasswordConfirm ? 'password' : 'text'} 
                           onChange={registerHandleChange} 
                           placeholder='패스워드를 동일하게 작성해주세요.' />

                    <button onClick={showPasswordConfirmHandler} className='eyebtn'>
                            {showPasswordConfirm ? (
                                <img src="./icons/eyeoff.png" alt="패스워드 보기 off" />
                            ) : (
                                <img src="./icons/eyeon.png" alt="패스워드 보기 on" />
                            )}
                    </button>
                </div>
                

                <div className='button'>
                    <span>성별</span>
                    <button
                        className={`man ${credentials.gender === "남성" ? "selected" : ""}`}
                        onClick={() => handleGenderClick("남성")}
                    >
                        남성
                    </button>
                    <button
                        className={`woman ${credentials.gender === "여성" ? "selected" : ""}`}
                        onClick={() => handleGenderClick("여성")}
                    >
                        여성
                    </button>
                </div>

                <label>E-Mail</label>
                <input id='email' type='email' onChange={registerHandleChange} placeholder='이메일을 작성해주세요.' />

                <label>전화번호</label>
                <input id='phone' type='tel' onChange={registerHandleChange} placeholder='하이픈(-)을 포함해주세요' />
                
                <label>주소</label>

                <input id='address' type='text' value={credentials.address} onChange={registerHandleChange} placeholder='도로명 주소를 작성해주세요.' />
                <AddressSearchBtn onAddressSelect={handleAddressSelect} />

                
                <label>상세주소</label>
                <input id='addressdetail' type='text' onChange={registerHandleChange} placeholder='상세 주소를 작성해주세요.' />

                <button className='register-button' onClick={registerBtnClickHandler}>
                    가입하기
                </button>

                <button className='login-nav' onClick={LoginNav}>
                    로그인 이동
                </button>
            </div>
            
            <RegisterFooter />

        </div>
    );
};

export default Register;