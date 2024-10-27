import axios from 'axios';
import React, { useState } from 'react';

/**
 * 
 * @returns 리스트 체크박스 컴포넌트
 */
const ListCheckbox = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const [checkButton, setCheckButton] = useState(false);
    const [checkData, setCheckData] = useState({}); 
    
    const updatedCheckData = {
        ...checkData,
        check: !checkButton
    };

    const postCheck = async (list) => {
        const listId = list._id;
        // 버튼 상태 반전
        const checkState = list._check; 
        setCheckButton(!checkButton);
        setCheckData(checkState);
        // 서버로 전송할 데이터 준비
       

        try {    
            const response = await axios.put(`${apiUrl}/list/update/${listId}`, updatedCheckData);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (                              
        <div className='list-checkbox'>
            <button 
                type='button'
                className='check-button' 
                onClick={postCheck}
            >
                {checkButton ? (
                    <img src='./icons/checkbox/list-check-on.png' width="18px" height="18px" alt="checked" />
                ) : (
                    <img src='./icons/checkbox/list-check-off.png' width="18px" height="18px" alt="unchecked" />
                )}
            </button>
        </div>
    );
};

export default ListCheckbox;
