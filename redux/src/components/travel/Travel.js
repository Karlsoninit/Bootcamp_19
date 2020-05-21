import React from "react";
import { useSelector } from "react-redux";
const israel = 1000;

const Travel = () => {
  const { balance } = useSelector((state) => state);
  return (
    <>
      <h2>your balance: {balance}</h2>
      <button>buy</button>
    </>
  );
};

export default Travel;
