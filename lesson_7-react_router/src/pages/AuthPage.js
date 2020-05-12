import React, { Component } from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "./auth/LoginPage";
import { RegisterPage } from "./auth/RegisterPage";

class AuthPage extends Component {
  state = {};

  componentDidMount() {
    this.props.history.push(`${this.props.match.path}/login`);
  }
  render() {
    return (
      <>
        <img
          style={{ width: 500 }}
          alt="p"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fics-seville.org%2Fwp-content%2Fuploads%2F2017%2F05%2Fwelcome_summer.jpg&f=1&nofb=1"
        />
        <Route
          exact
          path={`${this.props.match.path}/register`}
          component={RegisterPage}
        />
        <Route
          exact
          path={`${this.props.match.path}/login`}
          component={LoginPage}
        />
      </>
    );
  }
}

export default AuthPage;
