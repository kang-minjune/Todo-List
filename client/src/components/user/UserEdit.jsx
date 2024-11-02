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
            <button type='button' onClick={clickModal}>정보 수정</button>

            <Modal
                isOpen={editModal}
                className='modal'
                onRequestClose={clickModal}
                contentLabel="Edit User Information"
            >
                <h2>정보수정</h2>
                <button onClick={clickModal}>닫기</button>
            </Modal>
        </div>
    );
};

export default UserEdit;