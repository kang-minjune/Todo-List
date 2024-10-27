import React, { useState } from 'react';
import EmojiChoice from './emoji-choice/EmojiChoice';
import axios from 'axios';

import '../list/list-form.scss'

/**
 * 리스트 입력 폼 컴포넌트
 * @returns 
 */

const ListForm = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const [addListModal, setAddListModal] = useState(false);

    const [postData, setPostData] = useState([]);

    const handleClose = () => {
        setAddListModal(false);
    };

    // 입력된 값을 postData에 업데이트하는 함수
    const postHandle = (e) => {
        const { id, value } = e.target;
        setPostData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const listPost = async () => {
        try {
            console.log(postData);
            const response = await axios.post(`${apiUrl}/list/create`, postData); 

            // 응답 데이터 처리
            if (response && response.data) {
                console.log("POST 요청 성공:", response.data);
                alert("리스트 추가에 성공하셨습니다.");
                handleClose();
            }
            window.location.replace("/list");
        } catch (err) {
            console.error("POST 요청 중 에러 발생:", err); 
        }
    };

    return (
        <div className='list-form'>
            <div className='list-add-btn'>
                <button onClick={() => setAddListModal(true)}>
                    PLUS
                </button>
            </div>

            {addListModal && (
                <div className='list-create-form'>
                    <input 
                          type="text" 
                          id="listitem"
                          value={postData.listitem}
                          onChange={postHandle}
                          className='post-item-input'
                          placeholder='오늘의 투두는?'
                    />
                    
                    <button className='post-btn' onClick={listPost}>추가</button>
                    <button onClick={handleClose}>닫기</button>

                    <div className='datepick-emoji'>
                        <div className='datepick'>
                            <label htmlFor='createdate' style={{marginLeft:'10px'}}>시작</label>
                            <input 
                                   type="date" 
                                   id='createdate' 
                                   value={postData.createdate} 
                                   onChange={postHandle}
                                   style={{width:'150px', marginLeft:'5px'}}/>

                            <label htmlFor='enddate' style={{marginLeft:'10px'}}>종료</label>
                            <input 
                                   type="date" 
                                   id='enddate' 
                                   value={postData.enddate} 
                                   onChange={postHandle}
                                   style={{width:'150px', marginLeft:'5px'}} /> 
                        </div>

                        <div className='emoji-container'>
                            {/* <span>오늘의 감정</span>s */}
                            <EmojiChoice />
                        </div>
                    </div>
           
                    <textarea 
                          id="memo"
                          value={postData.memo}
                          onChange={postHandle}
                          className='post-memo-input'
                          placeholder='메모장 입니다. '
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default ListForm;