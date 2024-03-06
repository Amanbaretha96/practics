import { useState } from "react";

const State = () => {
  const b = { model: "mustag", age: "4567" };
  const [a, setA] = useState(b);
  const Dmvnv = () => {
    setA("jfhj");
  }

  console.log(a.model, "3");
  console.log(a.age);
  const  { age } = a;
  const { model } = a;
  console.log(age, "3");

  return (
    <div>
       <p> {age} </p>
      <p>i am aman</p>
      <button onClick={ Dmvnv } > take the shot </button>
    </div>
  );
};
export default State;
