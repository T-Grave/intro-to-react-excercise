import React from "react";
import "./MovieScore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieScore = (props) => {
  const { className, score } = props;
  return (
    <div className={`movie-score ${className}`}>
      <FontAwesomeIcon icon={faStar} size="xs" /> {score}
    </div>
  );
};

export default MovieScore;
