import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

/**
 * 
 * @returns 리스트 체크박스 컴포넌트
 */
const ListCheckbox = () => {
    const { user } = useContext(AuthContext);
    const apiUrl = process.env.REACT_APP_API_URL;

    const [checkButton, setCheckButton] = useState(false);
    const [checkData, setCheckData] = useState([]); 

    const userId = user?._id;

    useEffect(() => {
        const listData = async() => {
            try{
               const listData = await axios.get(`${apiUrl}/list/read/${userId}`, {
                      userid: userId
               })
               setCheckData(listData);
            } catch (err){
                console.err(err)
            }
        }
        listData();
    }, [apiUrl])
    

    const postCheck = async (list) => {
        setCheckButton(!checkButton);
        try {    
            const listId = list._id;
            const checkState = list.check; 
            console.log(listId);
            const response = await axios.put(`${apiUrl}/list/update/${listId}`, checkData);
            setCheckButton(!checkState);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (                              
        <div className='list-checkbox'>
            <button 
                type='button'
                id='check'
                className='check-button' 
                onClick={ postCheck}
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
