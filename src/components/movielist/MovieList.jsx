import React from "react";
import MovieCard from "./MovieCard";
import MovieCardContent from "./MovieCardContent";
import MovieThumbnail from "../core/MovieThumbnail";
import AddButton from "./AddButton";

import "./MovieList.css";
import { useWatchList } from "../../hooks/useWatchList";

const MovieList = ({ trending }) => {
  const { addMovie } = useWatchList();

  const handleAddToWatchlist = (movie) => () => {
    addMovie(movie);
  };

  return (
    <ul className="movie-list">
      {trending.results.map((movie) => (
        <MovieCard key={movie.id}>
          <AddButton onClick={handleAddToWatchlist(movie)} />
          <MovieThumbnail movie={movie} />
          <MovieCardContent movie={movie} />
        </MovieCard>
      ))}
    </ul>
  );
};

export default MovieList;
