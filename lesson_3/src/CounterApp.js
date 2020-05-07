import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  padding: 40px;
  border: 1px solid red;
  background-size: cover;
  background-image: ${(props) => {
    return `url(${props.image})`;
  }};
`;

export const CounterApp = ({ image, decrement, increment, count }) => (
  <Counter image={image}>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={() => decrement(5)}>decrement</button>
  </Counter>
);
