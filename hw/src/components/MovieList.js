import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  console.log("props MovieList", props);
  return props.popular.map((film) => (
    <Link
      to={{
        pathname: `/${props.hash}/${film.id}`,
        // search: "?category=adventure",
        // hash: "#treasure-island",
        state: { from: props.match.url, qwery: props.qwery },
      }}
    >
      <img
        alt="film"
        key={film.id}
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
      />
    </Link>
  ));
};

export default MovieList;
