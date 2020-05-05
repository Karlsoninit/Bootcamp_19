import React, { Component } from "react";

const num = 10;

export class LifeCycle extends Component {
  state = {
    counter: 1,
    isShow: true,
  };

  // before use application
  // constructor(props) {
  //   console.log("constructor");
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // after update application

  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("nextState", nextState);

  //   console.warn("shouldComponentUpdate");
  //   if (nextState.counter > 5) {
  //     return false;
  //   }
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate");
  // }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ counter: num });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("this.state", this.state);
    console.log("componentDidUpdate");
    if (prevState.counter === this.state.counter) {
      console.log("то же самое");
    }
  }

  counter = () => {
    this.setState((prev) => ({ counter: 12 }));
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("props", props);
  //   // console.log("state", state);
  //   console.log("getDerivedStateFromProps");
  //   // return state.counter ? {} : { counter: num };
  //   return { counter: props.param };
  // }

  handleHideModal = () => {
    this.setState({ isShow: false });
  };

  render() {
    console.log("--- render ---");
    return (
      <>
        {this.state.isShow && <h2>{this.state.counter}</h2>}
        <button onClick={this.handleHideModal}>HIDE</button>
        <button onClick={this.counter}>COUNTER</button>
      </>
    );
  }
}

export default App;
