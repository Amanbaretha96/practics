import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    <p> {count} </p>
      <button onClick={() => setCount(count + 1)}> click me </button>
    </div>
  );
};
export default UseState;