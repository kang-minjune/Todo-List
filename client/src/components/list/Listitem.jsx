import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../list/list-item.scss';

/**
 * 리스트 항목 컴포넌트
 * @param {*} itemId 
 * @param {*} itemOnchange 
 * @param {*} listItem 
 * @param {*} memo 
 * @returns 
 */
const Listitem = ({ 
        itemId, 
        itemOnchange, 
        listItem, 
        memo,
        deleteBtnOnclick
    }) => {

    const [checkButton, setCheckButton] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [itemEdit, setItemEdit] = useState(listItem); // 입력값 관리
    const [memoEdit, setMemoEdit] = useState(memo); // 메모 입력값 관리

    const checkBtnHandler = () => {
        setCheckButton(!checkButton);
    };

    const handleClose = () => {
        setEditModal(false);
    };

    return (
        <div className='item-form'>
            <span id={itemId}>{listItem}</span>
            <button 
                type='button'
                className='check-button' 
                onClick={checkBtnHandler}
            >
                {checkButton ? (
                    <img src='./icons/checkbox/list-check-on.png' width="20px" height="20px" />
                ) : (
                    <img src='./icons/checkbox/list-check-off.png' width="18px" height="18px" />
                )}
            </button>
            <button
                type='button'
                className='edit-button'
                onClick={() => setEditModal(true)}
            >
                수정
            </button>

            {editModal && (
                <Modal isOpen={true}>
                    <div className="modal-overlay" onClick={handleClose}></div>
                    <div className="modal">
                        <div className="edit-modal-content">
                            <button 
                                className="list-edit-commit"
                                onClick={() => {
                                    itemOnchange(itemEdit); // itemOnchange에 입력값 전달
                                }}
                            >
                                저장
                            </button>
                            <button className="list-edit-close" onClick={handleClose}>
                                닫기
                            </button>
                        </div>

                        <input 
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
                        />
                    </div>
                </Modal>
            )}

            <button
                type='button'
                className='delete-button'
                onClick={deleteBtnOnclick}
            >
                삭제
            </button>
        </div>
    );
};

export default Listitem;