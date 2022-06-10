import { useGenres } from "../../hooks/useGenres";
import MovieScore from "../core/MovieScore";

const MovieCardContent = ({ movie }) => {
  const { getGenreName } = useGenres();
  return (
    <div className="movie__card__content">
      <h3 className="movie__card__title">{movie.title || movie.name}</h3>
      <p className="movie__card__genres">
        {movie.genre_ids.map(getGenreName).join(", ")}
      </p>
      <span className="movie__card__date"> {movie.release_date}</span>
      <MovieScore className="movie__card__score" score={movie.vote_average} />
    </div>
  );
};

export default MovieCardContent;
