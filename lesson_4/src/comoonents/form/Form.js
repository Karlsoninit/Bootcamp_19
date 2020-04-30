import React, { Component } from "react";
import { InputForm } from "./inputForm/InputForm";
import { BtnFormSubmit } from "./btnFormSubmit/BtnFormSubmit";
import formOptions from "../../config.json";
import initialState from "./initialStateForm";

class Form extends Component {
  state = { ...initialState };

  handleSabmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    this.setState({ ...initialState });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    // console.log("re-render Form");
    console.log(this.state.nickName);
    const { nickName, login, email, password, confirmPassword } = this.state;
    return (
      <form onSubmit={this.handleSabmit}>
        <InputForm
          options={formOptions.inputNickName}
          handleChange={this.handleChange}
          value={nickName}
        />
        <InputForm
          options={formOptions.inputLogin}
          handleChange={this.handleChange}
          value={login}
        />
        <InputForm
          options={formOptions.inputEmail}
          handleChange={this.handleChange}
          value={email}
        />
        <InputForm
          options={formOptions.inputPassword}
          handleChange={this.handleChange}
          value={password}
        />
        <InputForm
          options={formOptions.inputConfirmPassword}
          handleChange={this.handleChange}
          value={confirmPassword}
        />
        <BtnFormSubmit />
      </form>
    );
  }
}

export default Form;
