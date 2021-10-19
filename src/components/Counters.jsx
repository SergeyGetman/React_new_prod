import React, {useState} from 'react';

const Counters = () => {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};

export default Counters;