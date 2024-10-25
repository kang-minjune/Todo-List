import React from 'react';

import '../emoji-choice/emoji-choice.scss'

const EmojiChoice = () => {
    return (
        <div className='emoji' style={{display:"flex", float:"right"}}>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/743/743418.png" alt="angry" width="15px" height="15px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637170.png" alt="sad" width="15px" height="15px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/3310/3310694.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="tired" width="16px" height="16px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/3508/3508689.png" alt="normal" width="15px" height="15px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637188.png" alt="happy" width="15px" height="15px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/3508/3508704.png" alt="love" width="15px" height="15px" />
            </button> 
        </div>
    );                                           
};

export default EmojiChoice;