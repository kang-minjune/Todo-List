import React, { useState } from 'react';
import Modal from 'react-modal';

import '../user/user-edit.scss';

const UserEdit = (props) => {
    const [editModal, setEditModal] = useState(false);

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
                <h2>정보수정</h2>
                <div className='edit-form'>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

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