import React, {useState, useContext, useEffect} from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

import '../user/user-list.scss';


const UserList = () => {
    const { user } = useContext(AuthContext);
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const [myListData, setMyListData] = useState([]);

    const [myListModal, setMyListModal] = useState(false);

    const myListModalHandler = () => { 
        setMyListModal(!myListModal);
    }
    
    useEffect(() => {
        const myListGet = async () => {
            try{
               const userId = user?._id;
               const response = await axios.get(`${apiUrl}/list/read/${userId}`)
               console.log(response.data);
               if(response && response.data){
                  setMyListData(response.data);
               }
               console.log(myListData);
            } catch(err) {
                console.error(err);
            }
        }
        myListGet();
    }, [apiUrl]);

    
    return (
        <div className='user-list'>
            <button onClick={myListModalHandler}>내 리스트</button>
            <Modal
                isOpen={myListModal}
                className='my-list-modal'
                onRequestClose={myListModalHandler}
                contentLabel="Edit User Information"
            >
                {myListData.map((mylist, index)=> (
                    <span key={index}>{mylist.listitem}</span>
                ))}
            </Modal>

        </div>
    );
};

export default UserList; 