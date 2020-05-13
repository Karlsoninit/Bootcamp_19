import React, { Component } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import queryString from "query-string";

class HomePage extends Component {
  state = {
    popular: null,
    qwery: "milk",
  };

  componentDidMount() {
    this.getPopular();
  }

  getPopular = async () => {
    try {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&page=1"
      );

      this.setState({ popular: data.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log("home", this.props);
    const parsed = queryString.parse(this.props.location.search);
    console.log("parsed", parsed);
    const { popular, qwery } = this.state;
    return (
      <>
        {popular && (
          <MovieList {...this.props} popular={popular} qwery={qwery} />
        )}
      </>
    );
  }
}

export default HomePage;
