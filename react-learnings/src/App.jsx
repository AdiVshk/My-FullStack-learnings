// import React, { useState, useEffect, useRef } from 'react';

// export default function App() {
//   const [count, SetCounter] = useState(0);
//   const PreviousValue = usePrev(count);

//   useEffect(() => {
//     if (PreviousValue !== null) {
//       console.log(PreviousValue);
//     }
//   }, [count]);

//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={() => SetCounter((prev) => prev + 1)}>Increase</button>
//     </>
//   );
// }

// function usePrev(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
