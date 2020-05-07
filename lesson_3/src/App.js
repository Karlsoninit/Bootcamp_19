import React, { Component } from "react";
import styled from "styled-components";
import { CounterApp } from "./CounterApp";

const Btn = styled.button`
  background-color: ${({ changeColor }) => (changeColor ? "red" : "green")};
`;

class App extends Component {
  state = {
    count: 0,
    step: this.props.step,
    isOpen: false,
  };

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + this.state.step };
    });
  };

  decrement = (param) => {
    if (this.state.count <= 0) {
      return;
    }
    this.setState((prev) => ({ count: prev.count - param }));
  };

  toggle = () => {
    this.setState((prev) => {
      console.log("prev", prev.isOpen);
      return { isOpen: !prev.isOpen };
    });
  };

  render() {
    const { count, isOpen } = this.state;

    return (
      <>
        <Btn changeColor={isOpen} onClick={() => this.toggle()}>
          {isOpen ? "HIDE" : "SHOW"}
        </Btn>
        {isOpen && (
          <CounterApp
            image={this.props.img}
            // fn={{
            //   increment: this.increment,
            //   decrement: this.decrement,
            //   count: count,
            // }}
            increment={this.increment}
            decrement={this.decrement}
            count={count}
          />
        )}
      </>
    );
  }
}

export default App;
