import React, { Component } from "react";
import Select from "react-select";
import products from "./products";

const options = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

class App extends Component {
  state = {
    products: [],
    filterProduct: [],
    chooseSize: "",
  };

  handleSearch = (evt) => {
    this.setState({ chooseSize: evt.value });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ products: products });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.chooseSize !== this.state.chooseSize) {
      console.log("filter");
      const filterProduct = products.filter((product) => {
        return product.availableSizes.includes(this.state.chooseSize);
      });

      this.setState({ filterProduct });
    }
  }

  render() {
    console.log("render");
    return (
      <>
        <h2>WORK</h2>
        <Select onChange={this.handleSearch} options={options} />
      </>
    );
  }
}

export default App;
