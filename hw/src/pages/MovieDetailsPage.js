import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    info: null,
  };

  componentDidMount() {
    this.getMovie();
    this.setState({ info: this.props.location.state });
  }

  getMovie = async () => {
    const id = this.props.match.params.movieId;

    try {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US`
      );

      this.setState({
        movie: movie.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  goBack = () => {
    this.props.history.push("/", this.state.info);
  };

  render() {
    console.log("props MovieDetailsPage", this.props);
    const parsed = queryString.parse(this.props.location.search);
    console.log("parsed", parsed);

    const { movie } = this.state;
    return (
      movie && (
        <div>
          <h2>MovieDetailsPage</h2>;
          <img
            alt="film"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          />
          <Link
            to={{
              pathname: `/movies/${this.props.match.params.movieId}/cast`,
            }}
          >
            Cast
          </Link>
          {this.state.info ? (
            <Link
              to={{
                pathname: `${this.state.info.from}`,
                state: {
                  qwery: this.state.info.qwery,
                },
                search: this.state.info.qwery
                  ? `?qwery=${this.state.info.qwery}`
                  : "",
              }}
            >
              Go back link
            </Link>
          ) : (
            <Link
              to={{
                pathname: "/",
              }}
            >
              Go back link
            </Link>
          )}
          <Switch>
            <Route exact path={`/movies/:movieId/cast`} component={Cast} />
          </Switch>
        </div>
      )
    );
  }
}

export default MovieDetailsPage;
