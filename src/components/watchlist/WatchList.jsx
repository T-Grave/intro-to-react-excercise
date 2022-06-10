import React from "react";
import WatchListItem from "./WatchListItem";
import Select from "../core/Select";
import "./WatchList.css";
import { useWatchList } from "../../hooks/useWatchList";
import { useGenres } from "../../hooks/useGenres";

const sortOptions = [
  { value: "title", label: "Title" },
  { value: "vote_average", label: "Rating" }
];

const WatchList = (props) => {
  const selectedGenre = "all";
  const handleSelectGenre = (genreId) => () => {};

  const { watchlist, allGenreIds } = useWatchList();
  const { getGenreName } = useGenres();

  return (
    <section className="watchlist">
      <h2 className="watchlist__title">Watchlist</h2>
      <label>Sort by</label>
      <Select options={sortOptions} />
      <label>Genres</label>
      <ul className="genres_filter">
        <li
          className={
            selectedGenre === "all" ? "genres_filter__item--selected" : ""
          }
          onClick={handleSelectGenre("all")}
        >
          All
        </li>
        {allGenreIds.map((genreId) => (
          <li
            className={
              selectedGenre === genreId ? "genres_filter__item--selected" : ""
            }
            onClick={handleSelectGenre(genreId)}
            key={genreId}
          >
            {getGenreName(genreId)}
          </li>
        ))}
      </ul>
      <ul className="watchlist__movies">
        {watchlist.map((movie) => (
          <WatchListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default WatchList;
