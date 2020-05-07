import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  state = {
    qwery: "фен",
  };
  render() {
    console.log("this.props", this.props);
    return (
      <>
        <h2>HomePage</h2>

        <button
          onClick={() =>
            this.props.history.push("/profile", {
              params: { name: this.state.qwery },
            })
          }
        >
          go to search
        </button>
      </>
    );
  }
}

export default HomePage;
