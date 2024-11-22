import React, {useState, useContext, useEffect} from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

import '../user/user-list.scss';


const UserList = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(apiUrl);
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
            } catch(err) {
                console.error(err);
            }
        }

        myListGet();
    }, [apiUrl])

    
    return (
        <div className='user-list'>
            <button onClick={myListModalHandler}>내 리스트</button>
            <Modal
                isOpen={myListModal}
                className='my-list-modal'
                onRequestClose={myListModalHandler}
                contentLabel="Edit User Information"
            >
            </Modal>

        </div>
    );
};

export default UserList; 