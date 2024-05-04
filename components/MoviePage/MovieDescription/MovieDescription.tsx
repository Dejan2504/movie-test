import "./MovieDescription.css";
import useMovesApi from "../../../redux/api/useMoviesApi";

const MovieDescription = () => {
  const { selectedMovie } = useMovesApi();

  return (
    <div className="movie_description">
      <div className="movie_overview-title">Movie overview:</div>
      <div className="movie_overview">{selectedMovie.overview}</div>
    </div>
  );
};

export default MovieDescription;
