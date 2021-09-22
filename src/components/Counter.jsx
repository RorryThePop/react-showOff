import React, { useState } from 'react';
import MainBtn from './UI/MainButton/MainBtn';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <MainBtn onClick={increment}>INCREMENT</MainBtn>
      <MainBtn onClick={decrement}>DECREMENT</MainBtn>
    </div>
  );
};

export default Counter;
