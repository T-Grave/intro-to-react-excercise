import { genres } from "../data/movie_genres";
import { useMemo } from "react";

export function useGenres() {
  const GenresMap = useMemo(() => {
    return new Map(genres.map((genre) => [genre.id, genre.name]));
  }, []);

  const getGenreName = (id) => {
    return GenresMap.get(id) ?? "Unknown";
  };

  return { getGenreName };
}
