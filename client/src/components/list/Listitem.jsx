import React, { useState } from 'react';
import Modal from 'react-modal';

import '../list/list-item.scss'

/**
 * 리스트 항목 컴포넌트
 * @param {*} itemId 
 * @param {*} editOnclik 
 * @returns 
 */
const Listitem = ( itemId, itemOnchange, memoId ) => {

    const [checkButton, setCheckButton] = useState(false);
    const [editModal, setEditModal]= useState(false);

    const checkBtnHandler = () => {
        setCheckButton(!checkButton);
    }

    
    const handleClose = () => {
       setEditModal(false);
    };

    return (
            <div className='item-form'>
                <span
                    onChange={itemOnchange}
                    id={itemId}
                />
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
                    onClick={() => { setEditModal(true)} }
                >
                    수정
                </button>

                { editModal === true ?  
                    <Modal isOpen={true} >
                    <div className="modal-overlay" onClick={handleClose}></div>
                    <div className="modal">
                            <div className="edit-modal-content">
                                <button className="list-edit-commit" >
                                    저장
                                </button>
                                <button className="list-edit-close" onClick={handleClose}>
                                    닫기
                                </button>
                            </div>
                            <input 
                                  className='item-edit-span'
                                  type='text'
                            />
                            <input 
                                  className='memo-edit-span'
                                  type='text'
                            />
                        </div>
                    </Modal> : editModal
                }

                <button
                    type='button'
                    className='delete-button'
                >
                    삭제
                </button>
                
            </div>
      
    );
};

export default Listitem;