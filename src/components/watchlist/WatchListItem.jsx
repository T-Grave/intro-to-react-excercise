import React from "react";
import { useGenres } from "../../hooks/useGenres";
import MovieScore from "../core/MovieScore";
import MovieThumbnail from "../core/MovieThumbnail";
import "./WatchListItem.css";

const WatchListItem = (props) => {
  const { movie } = props;
  const { getGenreName } = useGenres();

  return (
    <li className="watchlist__movies__item">
      <MovieThumbnail
        movie={movie}
        square
        className="watchlist__movie__item__img"
      />
      <div>
        <h4 className="watchlist__movie__item__title">
          {movie.title || movie.name}
        </h4>
        <p className="watchlist__movie__item__genre">
          {movie.genre_ids.map(getGenreName).join(", ")}
        </p>
      </div>
      <MovieScore
        score={movie.vote_average}
        className="watchlist__movie__item__score"
      />
    </li>
  );
};

export default WatchListItem;
