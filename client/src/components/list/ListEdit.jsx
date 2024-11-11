import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ListCheckbox from './ListCheckbox';

import '../list/list-edit.scss';

/**
 * 리스트 항목 컴포넌트
 * @param {*} itemId 
 * @param {*} itemOnchange 
 * @param {*} listItem 
 * @param {*} memo 
 * @returns 
 */
const ListEdit = ({ 
        itemId,
        listItem,
        memo,
        createdate,
        enddate,
        deleteBtnOnclick,
        listEditOnclick,
    }) => {

    
    const [editModal, setEditModal] = useState(false);
    const [itemEdit, setItemEdit] = useState(listItem); // 입력값 관리
    const [memoEdit, setMemoEdit] = useState(memo); // 메모 입력값 관리
    const [createdateEdit, setCreatedateEdit] = useState(createdate);
    const [enddateEdit, setEnddateEdit] = useState(enddate);

    const handleClose = () => {
        setEditModal(false);
    };

    const handleSave = () => {
        listEditOnclick(itemId, itemEdit, memoEdit, createdateEdit, enddateEdit);
        setEditModal(false);
    };

    return (
        <div className='item-form'>
            <span id={itemId}>{itemEdit}</span>

            <ListCheckbox />

            <button
                type='button'
                className='edit-button'
                onClick={()=>setEditModal(true)}  
            >
                수정
            </button>

            {editModal && (
                <Modal isOpen={true} onRequestClose={handleClose} className='list-edit-modal'>
                    <div className="modal-overlay" onClick={handleClose}></div>
                    <div className="modal">
                        <div className="edit-modal-content">
                            <button 
                                className="list-edit-commit"
                                onClick={handleSave}
                            >
                                저장
                            </button>
                            <button className="list-edit-close" onClick={handleClose}>
                                닫기
                            </button>
                        </div>

                        <input 
                            id='listItem'
                            className='item-edit-input'
                            type='text'
                            value={itemEdit}
                            onChange={(e) => setItemEdit(e.target.value)} // 변경 사항 관리
                        />

                        <div className='datepick-edit'>
                            <label htmlFor='createdate' style={{marginLeft:'10px'}}>시작</label>
                            <input 
                                   type="date" 
                                   id='createdate' 
                                   value={createdateEdit} 
                                   onChange={(e) => setCreatedateEdit(e.target.value)}
                                   style={{width:'150px', marginLeft:'5px'}}/>

                            <label htmlFor='enddate' style={{marginLeft:'10px'}}>종료</label>
                            <input 
                                   type="date" 
                                   id='enddate' 
                                   value={enddateEdit} 
                                   onChange={(e) => setEnddateEdit(e.target.value)}
                                   style={{width:'150px', marginLeft:'5px'}} /> 
                        </div>

                        <input 
                            id='memo'
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

export default ListEdit;