import React, {useState} from 'react';


/**
 * 
 * @returns 리스트 체크박스 컴포넌트
 */
const ListCheckbox = () => {
    const [checkButton, setCheckButton] = useState(false);
    const [ checkState, setCheckState ] = useState([]);

    const checkReverse = () => {
        setCheckButton(!checkButton);
    }

    const checkClickHandler = (list) => {
        try {
             const checkState = list.check;
             console.log(checkState)
             setCheckState(!checkState);
        } catch(err) {
             console.log(err)
        }
     }

    return (
        <div className='list-checkbox'>
            <button 
                type='button'
                className='check-button' 
                onClick={checkReverse}
            >
                {checkButton ? (
                    <img src='./icons/checkbox/list-check-on.png' width="18px" height="18px" />
                ) : (
                    <img src='./icons/checkbox/list-check-off.png' width="18px" height="18px" />
                )}
            </button>
        </div>
    );
};

export default ListCheckbox;