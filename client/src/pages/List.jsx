import React, { useState, useEffect, useContext } from 'react';

import Login from './Login';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ListEdit from '../components/list/ListEdit';
import ListForm from '../components/list/ListForm';

import { AuthContext } from '../context/AuthContext';

import axios from 'axios';

import '../styles/list.scss'

const List = () => {
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const { user } = useContext(AuthContext);
    
    console.log(user);

    const [ listData, setListData ] = useState([])
    const [ deleteData, setDeleteData ] = useState([]); 
    const [ updateData, setUpdateData ] = useState([]); 
    
    //리스트 정보 갖고 오는 코드
    useEffect(() => {
        const listGet = async () => {
            try{
                console.log(`API URL: ${apiUrl}`)
                const response = await axios.get(`${apiUrl}/list/allread`);
                console.log(response.data)
                
                if(response && response.data){
                    setListData(response.data);
                }

            } catch(err){
                console.log(err);
            }
        }

        if (apiUrl) {
            listGet();
         } else {
            console.error('API URL is not defined');
         }
    }, [apiUrl]);

    //리스트 항목 지우는 코드
    const listDelete = async(list) => {
        console.log(list);
        const itemId = list._id; // 객체에서 _id를 추출
        console.log(itemId)
        
        if (!deleteData) {
            console.error("itemId is undefined");
            return;
        }
    
        try {
            console.log("Deleting item with ID:", itemId);
            const response = await axios.delete(`${apiUrl}/list/delete/${itemId}`);
            console.log(response.data);
            setDeleteData((prevState) => prevState.filter((item) => item._id !== itemId));
            window.location.replace("/list");
        } catch (err) {
            console.log(err);
        } 
    };

    const listUpdate = async (itemId, updatedItem, updatedMemo, updatedCreatedate, updatedEnddate ) => {
        if (!itemId) {
            console.error("itemId is undefined");
            return;
        }
    
        try {
            console.log("Updating item with ID:", itemId);
            const response = await axios.put(`${apiUrl}/list/update/${itemId}`, {
                listitem: updatedItem, // 수정된 항목 값
                memo: updatedMemo, // 수정된 메모 값
                createdate: updatedCreatedate,
                enddate: updatedEnddate,
            });
            console.log(response.data);
    
            // 업데이트된 데이터를 listData에 반영
            setListData((prevData) => 
                prevData.map((item) => 
                    item._id === itemId ? { ...item, listitem: updatedItem, memo: updatedMemo, createdate: updatedCreatedate, enddate: updatedEnddate } : item
                )
            );
    
            alert("리스트 수정이 완료되었습니다.");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='list'>
            {/* {user ? ( */}
                <>
                    <Header />
                        <div className='list-page'>
                            <div className='form'>
                                <div className='container'>
                                    {/* listData를 map 함수로 순회 */}
                                    {listData.map((list, index) => (
                                        <ListEdit 
                                            key={index}      
                                            itemId={list._id} // 각 항목의 고유 ID를 itemId로 전달
                                            itemOnchange={setListData}
                                            listItem={list.listitem}  
                                            memo={list.memo}
                                            createdate={list.createdate}
                                            enddate={list.enddate}
                                            deleteBtnOnclick={() => listDelete(list)}
                                            // updatedCreatedate와 updatedEnddate가 전달되도록 수정
                                            listEditOnclick={(id, updatedItem, updatedMemo, updatedCreatedate, updatedEnddate) => 
                                                listUpdate(id, updatedItem, updatedMemo, updatedCreatedate, updatedEnddate)
                                            }
                                    />
                                    ))}
                                </div>
                                <ListForm />
                            </div>
        
                        </div>
                    <Footer/>
                </>
            {/* ) :(
                    <Login />
            )} */}
            
        </div>
    );
};

export default List;