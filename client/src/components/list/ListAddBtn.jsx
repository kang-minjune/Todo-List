import React, { useState, Modal } from 'react';

import '../list/list-add-btn.scss'

const ListAddBtn = () => {

    const [addListModal, setAddListModal] = useState(false);

    const handleClose = () => {
        setAddListModal(false);
    };

    return (
        <div>
            <div className='list-add-btn'>
                    <button onClick={() => setAddListModal(true)}>
                        PLUS
                    </button>
                    {/* <button></button> */}
                    </div>
                    {addListModal && (
                        <Modal isOpen={true}>
                            <div className="modal-overlay" onClick={handleClose}></div>
                            <div className="modal">
                                <div className="edit-modal-content">
                                    <button 
                                        className="list-edit-commit"
                                        onClick={() => {
                                  
                                            handleClose();
                                        }}
                                    >
                                        저장
                                    </button>
                                    <button className="list-edit-close" onClick={handleClose}>
                                        닫기
                                    </button>
                                </div>

                                {/* <input 
                                    className='item-edit-input'
                                    type='text'
                                    value={itemEdit}
                                    onChange={(e) => setItemEdit(e.target.value)} // 변경 사항 관리
                                />

                                <input 
                                    className='memo-edit-input'
                                    type='text'
                                    value={memoEdit}
                                    onChange={(e) => setMemoEdit(e.target.value)} // 메모 변경 사항 관리
                                /> */}
                            </div>
                        </Modal>
            )}
        </div>
    );
};

export default ListAddBtn;