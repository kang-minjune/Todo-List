import React from 'react';
import '../emoji-choice/emoji-choice.scss'

const EmojiChoice = () => {
    return (
        <div className='emoji-container'>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/128/743/743418.png" alt="angry" width="30px" height="30px" />
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637170.png" alt="sad" width="30px" height="30px" />
            </button>
            <button>
                <img src="https://t4.ftcdn.net/jpg/08/36/96/15/240_F_836961535_aRyKsEfwoSZyWtgNqp2oHuRK2Z4uUUWC.jpg" alt="tired" width="30px" height="30px" />
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/128/3508/3508689.png" alt="normal" width="30px" height="30px" />
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637188.png" alt="happy" width="30px" height="30px" />
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/128/3508/3508704.png" alt="love" width="30px" height="30px" />
            </button>     
        </div>
    );
};

export default EmojiChoice;