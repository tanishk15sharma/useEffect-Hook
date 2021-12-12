import React, { useState, useEffect } from "react";

function InputCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `++C ${count}`;
    console.log("me");
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Count {count} </button>
    </div>
  );
}

export default InputCounter;
