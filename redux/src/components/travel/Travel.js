import React, { useContext } from "react";
import { LayaltyProgramContext } from "../../context/context";

const Travel = () => {
  const { bonus, countrys } = useContext(LayaltyProgramContext);
  console.log("countrys", countrys);
  return (
    <>
      <h2>choose travel</h2>
      <p>bonus: {bonus}</p>

      <ul>
        {countrys.map(({ city }) => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
};

export default Travel;
