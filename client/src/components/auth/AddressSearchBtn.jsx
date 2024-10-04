import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import './styles/address-search-btn.scss'

const AddressSearchBtn = ({ onAddressSelect }) => {
  const [open, setOpen] = useState(false);

  const handleComplete = (data) => {
    const fullAddress = data.address;
    const extraAddress = data.addressType === 'R' ? (data.bname || '') + (data.buildingName ? `, ${data.buildingName}` : '') : '';
    const completeAddress = `${fullAddress} ${extraAddress}`.trim();
    
    onAddressSelect(completeAddress);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='address-search'>
      <button className="address-search-btn" onClick={handleOpen}>
        주소검색
      </button>
    
        {open && (
          <>
            <Modal isOpen={true} >
              <div className="modal-overlay" onClick={handleClose}></div>
              <div className="modal">
                <div className="modal-content">
                  <button className="close" onClick={handleClose}>
                    닫기
                  </button>
                  <DaumPostcode onComplete={handleComplete} />
                </div>
              </div>
           </Modal>
          </>
        )}  
     
    </div>
  );
};

export default AddressSearchBtn;