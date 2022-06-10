import React, { useContext, useState, useMemo } from "react";

export const WatchListContext = React.createContext();

export const WatchListProvider = ({ children, initialWatchList }) => {
  const [watchlist, setWatchlist] = useState(initialWatchList ?? []);

  const allGenreIds = useMemo(() => {
    const genreIds = watchlist.reduce(
      (ids, movie) => ids.concat(movie.genre_ids),
      []
    );

    return [...new Set(genreIds)];
  }, [watchlist]);

  function addMovie(movie) {
    const newWatchList = [...watchlist, movie];
    setWatchlist(newWatchList);
  }

  function removeMovie(movie) {
    // TODO: Implement
  }

  return (
    <WatchListContext.Provider
      value={{ watchlist, addMovie, removeMovie, allGenreIds }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export function useWatchList() {
  return useContext(WatchListContext);
}
