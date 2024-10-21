import React, { useState } from 'react';
import axios from 'axios';

import '../list/list-add-btn.scss';

const ListAddBtn = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const [addListModal, setAddListModal] = useState(false);

    const [postData, setPostData] = useState({
        listitem: '',
        memo: '',
    });

    const handleClose = () => {
        setAddListModal(false);
    };

    // 입력된 값을 postData에 업데이트하는 함수
    const handleChange = (e) => {
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
        <div>
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
                          onChange={handleChange}
                          className='post-item-input'
                          placeholder='오늘의 투두는?'
                    />
                    
                    <button className='post-btn' onClick={listPost}>추가</button>
                    <button onClick={handleClose}>닫기</button>
                    
                    <input 
                          type="text" 
                          id="memo"
                          value={postData.memo}
                          onChange={handleChange}
                          className='post-memo-input'
                          placeholder='메모장 입니다. 필요한 내용을 적어주세요.'
                    />
                </div>
            )}
        </div>
    );
};

export default ListAddBtn;