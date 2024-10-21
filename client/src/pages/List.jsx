import React, { useState, useEffect, useContext } from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Listitem from '../components/list/Listitem';
import ListAddBtn from '../components/list/ListAddBtn';

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

    //리스트 삭제하는 코드
    const listDelete = async (list) => {
          try{
            await axios.delete(`${apiUrl}/list/delete/${list._id}`);
            setListData((userData) => userData.filter((item) => item._id !== list._id));

          } catch(err) {
             console.log("Error deleting list data", err)
          }
    }


    useEffect(() => {
      if(user){
            setUserData({
                username: user.username,
            })
        }
    }, [user])


    return (
        <div className='list'>
            <Header />
                <div className='list-page'>
                    <div className='form'>
                         <div className='container'>
                            {/* listData를 map 함수로 순회 */}
                            {listData.map((list, index) => (
                                <Listitem 
                                    key={index}        // 각 항목에 고유 key를 부여
                                    itemOnchange={setListData}  // 상태 변경 함수
                                    listItem={list.listitem}  
                                    memo={list.memo} 

                                    listDeleteOnclick={() => listDelete(list)}
                                    // check={list.check}
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