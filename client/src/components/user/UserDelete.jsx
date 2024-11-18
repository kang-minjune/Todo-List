import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Modal from 'react-modal';
import '../user/user-delete.scss'
import axios from 'axios';

const UserDelete = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(apiUrl);

    const userId = user?._id;
    const [ deleteModal, setDeleteModal ] = useState(false);

    const [ deleteData, setDeleteData ] = useState(null);

    //회원탈퇴 핸들러
    const userDelete = async () => {
        const confirmDelete = window.confirm("정말로 회원 탈퇴를 진행하시겠습니까? 삭제된 정보는 복구가 불가능합니다.");
        try{
            const response = await axios.delete(`${apiUrl}/user/delete/${userId}`)
            if(response && response.data) {
                setDeleteData(response.data);
                localStorage.removeItem('user');
                setDeleteData(null);
            }
            alert('회원 탈퇴가 정상적으로 완료 되었습니다.');
            window.location.replace('/');
        } catch(err) {
            console.error(err);
        }
    }

    const deleteModalHandler = () => {
        setDeleteModal(!deleteModal);

    }
    return (
        <div className='user-delete'>
            <button onClick={deleteModalHandler}>회원 탈퇴</button>
            <Modal
                isOpen={deleteModal}
                className='delete-modal'
                onRequestClose={deleteModalHandler}
                contentLabel="Edit User Information"
            >
                   <h2>회원 탈퇴</h2>
                   
                   <p>
                    1. 회원탈퇴를 진행하시면 계정에 저장된 모든 개인 정보와 이용 기록이 삭제되며 복구가 불가능합니다. <br/><br/>
                    2. 삭제되는 정보에는 작성한 게시물, 댓글, 저장된 데이터 등이 포함될 수 있습니다.<br/><br/>
                    3. 유료 서비스 이용 중이라면 잔여 기간이 즉시 소멸되며, 환불은 불가합니다.<br/><br/>
                    4. 탈퇴 후 동일한 이메일 또는 전화번호로 재가입이 제한될 수 있습니다.<br/><br/>
                    5. 탈퇴 이후에는 기존 계정으로 로그인하거나 서비스를 이용할 수 없습니다.<br/><br/>
                    6. 진행 중인 거래, 문의, 또는 신청한 서비스가 있을 경우, 탈퇴 전에 반드시 처리 상황을 확인해 주세요.<br/><br/>
                    7. 이 모든 사항을 확인 후 신중히 결정해 주시기 바랍니다.
                   </p>
                   <p>
                       탈퇴를 하시려면 하단의 회원 탈퇴 버튼을 눌러주세요.
                   </p>

                   <div className='delete-close-btn'>
                       <button 
                               className='delete-btn'
                               onClick={userDelete}
                        >탈퇴</button>
                       <button 
                               className='close-btn'
                               onClick={() => setDeleteModal(!deleteModal)}
                        >닫기</button>
                   </div>
            </Modal>
        </div>
    );
};

export default UserDelete;