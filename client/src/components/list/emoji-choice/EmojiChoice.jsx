import React from 'react';

import '../emoji-choice/emoji-choice.scss'

const EmojiChoice = () => {
    return (
        <div className='emoji' style={{display:"flex", float:"right"}}>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555296.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="angry" width="40px" height="40px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555295.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="sad" width="40px" height="40px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555302.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="tired" width="40px" height="40px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555294.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="normal" width="40px" height="40px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555293.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="happy" width="40px" height="40px" />
            </button>
            <button style={{background:'none', border:'none'}}>
                <img src="https://cdn-icons-png.freepik.com/256/1555/1555288.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid" alt="love" width="40px" height="40px" />
            </button> 
        </div>
    );                                           
};

export default EmojiChoice;