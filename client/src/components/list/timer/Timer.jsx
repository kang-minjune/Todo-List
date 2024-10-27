// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds(seconds + 1);
//     }, 1000); // 1초 간격으로 함수 반복 실행

//     return () => {
//       clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 정리
//     };
//   }, [seconds]);

//   return (
//     <div>
//       <h1>타이머: {seconds} 초</h1>
//     </div>
//   );
// }

// export default Timer;