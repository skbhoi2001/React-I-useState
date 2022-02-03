import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handeAdd = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => handeAdd(1)}>+</button>
      <button onClick={() => handeAdd(-1)}>-</button>
    </>
  );
}

export { Counter };
