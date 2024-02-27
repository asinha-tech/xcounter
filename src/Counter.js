import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button className="increment-button" onClick={handleIncrementClick}>
        Increment
      </button>
      <button className="decrement-button" onClick={handleDecrementClick}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;