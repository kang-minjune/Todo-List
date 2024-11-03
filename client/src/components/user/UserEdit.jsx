import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/AuthContext';
import '../user/user-edit.scss';

const UserEdit = (props) => {
    const { user } = useContext(AuthContext);
    const [editModal, setEditModal] = useState(false);

    const [userEditData, setUserEditData] = useState([]);

    const clickModal = () => {
        setEditModal(!editModal);
    };

    return (
        <div className='user-edit'>
            <button type='button' onClick={clickModal}>회원정보 수정</button>

            <Modal
                isOpen={editModal}
                className='modal'
                onRequestClose={clickModal}
                contentLabel="Edit User Information"
            >
                <h2>회원정보 수정</h2>
                <div className='edit-form'>
                    
                        <label>아이디</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>비밀번호</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>이름</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>이메일</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>주소</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>상세주소</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>아이디</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>
                    
                        <label>아이디</label>
                        <input type="text" onChange={(e)=> setUserEditData(e.target.value)}/>

                    <div className='buttons'>
                        <button className='commit-btn'>저장</button>
                        <button className='close-btn' onClick={clickModal}>닫기</button>
                    </div>
                   
                    
                </div>
            </Modal>
        </div>
    );
};

export default UserEdit;