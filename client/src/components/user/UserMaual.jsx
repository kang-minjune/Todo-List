import React,{ useState } from 'react';

import Modal from 'react-modal';

import '../user/user-manual.scss';

const UserMaual = () => {

    const [ manualModal, setManualModal ] = useState(false);

    const manualModalHandler = () => {
        setManualModal(!manualModal);
    }

    return (
        <div className='manual'>
            <button onClick={manualModalHandler}>메뉴얼</button>
            <Modal
                isOpen={manualModal}
                className='manual-modal'
                onRequestClose={manualModalHandler}
                contentLabel="Edit User Information"
            >
                <h2>메뉴얼</h2>

                <div className='content'>
                    리스트 기능

                </div>

                <div className='content'>
                    맵 마커 기능
                </div>

                <button
                       onClick={() => setManualModal(!manualModal)}
                >닫기</button>
            </Modal>
        </div>
    );
};

export default UserMaual;