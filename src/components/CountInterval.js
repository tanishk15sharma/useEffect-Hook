import React, { useState, useEffect } from "react";

function CountAuto() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const Interval = setInterval(tick, 1000);
    return () => {
      clearInterval(Interval);
    };
  });

  return <h1> {count} </h1>;
}

export default CountAuto;
