import "./MovieButton.css";
import useMovesApi from "../../../redux/api/useMoviesApi";

const MovieButton = () => {
  const { selectedMovie } = useMovesApi();

  if (!selectedMovie.homepage) return;

  return (
    <div className="movie_button">
      <a href={selectedMovie.homepage}>
        <button>Go to offical page</button>
      </a>
    </div>
  );
};

export default MovieButton;
