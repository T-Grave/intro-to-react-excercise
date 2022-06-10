import React from "react";
import configuration from "../../data/configuration.json";
import "./MovieThumbnail.css";

const MovieThumbnail = (props) => {
  const { movie, square = false, className = "" } = props;
  return (
    <img
      className={`movie__thumbnail ${
        square ? "movie__thumbnail--square" : null
      } ${className}`}
      src={[
        configuration.images.secure_base_url,
        configuration.images.poster_sizes[2],
        movie.poster_path
      ].join("/")}
      alt={movie.title}
    />
  );
};

export default MovieThumbnail;
