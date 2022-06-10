import React from "react";
import "./MovieList.css";

const MovieCard = ({ children }) => {
  return (
    <li className="movie-list__item">
      <div className="movie__card">{children}</div>
    </li>
  );
};

export default MovieCard;
