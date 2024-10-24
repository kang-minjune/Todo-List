import React, { useState, useEffect, useContext } from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Listitem from '../components/list/Listitem';
import ListAddBtn from '../components/list/ListAddBtn';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

import '../styles/list.scss'

const List = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);
    console.log(user);

    const [ ListData, setListData ] = useState([])
    const [ deleteData, setDeleteData ] = useState([]); 
    
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


    // useEffect(() => {
    //   if(user){
    //         setUserData({
    //             username: user.username,
    //         })
    //     }
    // }, [user])

    const listDelete = async(list) => {
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



    return (
        <div className='list'>
            <Header />
                <div className='list-page'>
                    <div className='form'>
                         <div className='container'>
                            {/* listData를 map 함수로 순회 */}
                            {ListData.map((list, index) => (
                                <Listitem 
                                    key={index}        // 각 항목에 고유 key를 부여
                                    itemOnchange={setListData}  // 상태 변경 함수
                                    listItem={list.listitem}  
                                    memo={list.memo}
                                    deleteBtnOnclick={() => listDelete(list)}

                                    // listDeleteOnclick={() => listDelete(deleteData)}
                                />
                            ))}
                        </div>
                        <ListAddBtn />
                    </div>
   
                </div>
            <Footer/>
        </div>
    );
};

export default List;