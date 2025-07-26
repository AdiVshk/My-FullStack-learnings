import React, { useState, useContext, createContext } from 'react';

const BuilderContext = createContext();

export default function App() {
  return (
    <>
      <Builder>
        <OuterLayer />
      </Builder>
    </>
  );
}

function Builder({ children }) {
  const [count, setCount] = useState(0);

  return (
    <BuilderContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

function OuterLayer() {
  return (
    <>
      <Result />
      <IncreaseButton />
      <DecreaseButton />
    </>
  );
}

function Result() {
  const { count } = useContext(BuilderContext);
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function IncreaseButton() {
  const { setCount } = useContext(BuilderContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </>
  );
}

function DecreaseButton() {
  const { setCount } = useContext(BuilderContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  );
}
