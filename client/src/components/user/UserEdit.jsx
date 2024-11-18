import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

import '../user/user-edit.scss';

const UserEdit = () => {
    const { user } = useContext(AuthContext);
    const apiUrl = process.env.REACT_APP_API_URL;

    const [editModal, setEditModal] = useState(false);
    const [userEditData, setUserEditData] = useState([]);

    //유저정보 불러오는 함수
    useEffect(() => {
        if (apiUrl && user?._id) {
            const userGet = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/user/read/${user._id}`);
                    if (response && response.data) {
                        setUserEditData(response.data);
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            userGet();
        } else {
            console.error('API URL 또는 사용자 ID가 누락되었습니다.');
        }
    }, [apiUrl]);

    //유저정보 수정 함수
    const userUpdate = async () => {
        try{
           const response = await axios.put(`${apiUrl}/user/update/${user._id}`, userEditData);
           console.log(response.data);
           if(response && response.data) {
                setUserEditData(response.data);
           }
           alert('회원정보 수정이 완료되었습니다.');
           window.location.replace('/mypage');
        } catch (err) {
            console.error('유저 업데이트 오류내용: ', err)
        }
    }

    const editModalHandler = () => {
        setEditModal(!editModal);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserEditData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <div className='user-edit'>
            <button type='button' onClick={editModalHandler}>회원정보 수정</button>

            <Modal
                isOpen={editModal}
                className='edit-modal'
                onRequestClose={editModalHandler}
                contentLabel="Edit User Information"
            >
                <h2>회원정보 수정</h2>
                <div className='edit-form'>
                    <label>아이디</label>
                    <input
                        type="text"
                        id="username"
                        value={userEditData.username}
                        onChange={handleInputChange}
                    />

                    {/*                     
                    <label>비밀번호</label>
                    <input
                        type="text"
                        id="password"
                        value={userEditData.password}
                        onChange={handleInputChange}
                    /> */}
                    
                    <label>이름</label>
                    <input
                        type="text"
                        id="realname"
                        value={userEditData.realname}
                        onChange={handleInputChange}
                    />
                    
                    <label>이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={userEditData.email}
                        onChange={handleInputChange}
                    />

                    <label>전화번호</label>
                    <input
                        type="tel"
                        id="phone"
                        value={userEditData.phone}
                        onChange={handleInputChange}
                    />
                    
                    <label>주소</label>
                    <input
                        type="text"
                        id="address"
                        value={userEditData.address}
                        onChange={handleInputChange}
                    />
                    
                    <label>상세주소</label>
                    <input
                        type="text"
                        id="realname"
                        value={userEditData.addressdetail}
                        onChange={handleInputChange}
                    />
                    
                    <label>성별</label>
                    <input
                        type="text"
                        id="gender"
                        value={userEditData.gender}
                        onChange={handleInputChange}
                    />
                    
                    <div className='commit-close-btn'>
                        <button className='commit-btn' onClick={userUpdate}>저장</button>
                        <button className='close-btn' onClick={editModalHandler}>닫기</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default UserEdit;