import React, { useState, useEffect, useContext } from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Listitem from '../components/list/Listitem';

import { AuthContext } from '../context/AuthContext';

import '../styles/list.scss'
import axios from 'axios';

const List = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);

    const [ listData, setListData ] = useState([])

    const [userData, setUserData] = useState({
        username:'',
    })

    
    //리스트정보 갖고 오는 코드
    useEffect(() => {
        const listGet = async () => {
            console.log(listData)
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


    useEffect(() => {
      if(user){
            setUserData({
                username: user.username,
            })
        }
    }, [user])

    const { username } = userData ;

    return (
        <div className='list'>
            <Header />
                <div className='list-page'>
                           
                    <div className='container'>
                        {/* listData를 map 함수로 순회 */}
                        {listData.map((list, index) => (
                            <Listitem 
                                key={index}        // 각 항목에 고유 key를 부여
                                itemOnchange={setListData}  // 상태 변경 함수
                                itemId={list.listitem}  // itemId에 각 항목의 값 전달
                                memo={list.memo}       // memo 데이터 전달
                                check={list.check}     // check 데이터 전달
                            />
                        ))}

                    </div>

                    <div className='list-add-btn'>
                        <button>추가</button>
                        {/* <button></button> */}
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default List;