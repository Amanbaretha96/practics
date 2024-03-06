const { useState } = require("react");

const Normal = () => {
  const [data, setData] = useState("aman");
//   const Abnormal = () => {
//     setData(baretha);
//   };
  return (
    <div>
      <p> my name is </p>
      <button onClick={() => setData("data")}></button>
    </div>
  );
};
export default  Normal;
