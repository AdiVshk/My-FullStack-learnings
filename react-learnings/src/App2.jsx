import React, { useState, useRef, useEffect } from 'react';

export default function App2() {
  const [count, IncreaseCount] = useCounter();

  return (
    <>
      <div> {count}</div>
      <button onClick={IncreaseCount}>Increase</button>
    </>
  );
}

function useCounter() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount((prev) => prev + 1);
  }

  return { count, IncreaseCount };
}
