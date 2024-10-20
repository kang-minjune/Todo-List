import React, { useState, useEffect, useContext, Modal } from 'react';

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
    const [addListModal, setAddListModal] = useState(false);

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
     
    const handleClose = () => {
        setAddListModal(false);
    };


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
                                listItem={list.listitem}  
                                memo={list.memo}   
                                // check={list.check}  
                            />
                        ))}

                    </div>

                    <div className='list-add-btn'>
                        <button onClick={() => setAddListModal(true)}>리스트 추가</button>
                        {/* <button></button> */}
                    </div>
                    {addListModal && (
                        <Modal isOpen={true}>
                            <div className="modal-overlay" onClick={handleClose}></div>
                            <div className="modal">
                                <div className="edit-modal-content">
                                    <button 
                                        className="list-edit-commit"
                                        onClick={() => {
                                  
                                            handleClose();
                                        }}
                                    >
                                        저장
                                    </button>
                                    <button className="list-edit-close" onClick={handleClose}>
                                        닫기
                                    </button>
                                </div>

                                {/* <input 
                                    className='item-edit-input'
                                    type='text'
                                    value={itemEdit}
                                    onChange={(e) => setItemEdit(e.target.value)} // 변경 사항 관리
                                />

                                <input 
                                    className='memo-edit-input'
                                    type='text'
                                    value={memoEdit}
                                    onChange={(e) => setMemoEdit(e.target.value)} // 메모 변경 사항 관리
                                /> */}
                            </div>
                        </Modal>
            )}
                </div>
            <Footer/>
        </div>
    );
};

export default List;