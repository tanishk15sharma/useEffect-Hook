import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = ` ++ ${count}  `;
  });

  return <button onClick={increaseCounter}>Count {count} </button>;
}

export default Counter;
