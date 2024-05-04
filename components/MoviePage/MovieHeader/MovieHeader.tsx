import "./MovieHeader.css";
import useMovesApi from "../../../redux/api/useMoviesApi";
import MovieHeaderPoster from "./MovieHeaderPoster/MovieHeaderPoster";
import MovieHeaderTitle from "./MovieHeaderTitle/MovieHeaderTitle";
import { useNavigate } from "react-router-dom";

const MovieHeader = () => {
  const { selectedMovie, clearSelectedMovie } = useMovesApi();
  const navigate = useNavigate();

  return (
    <div
      className="movie_header"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`,
      }}
    >
      <div
        className="back_button"
        onClick={() => {
          navigate(-1);
          clearSelectedMovie();
        }}
      >
        &lt; Back
      </div>
      <MovieHeaderPoster poster={selectedMovie.poster_path} />
      <MovieHeaderTitle
        date={selectedMovie.release_date}
        title={selectedMovie.title}
        status={selectedMovie.status}
      />
    </div>
  );
};

export default MovieHeader;
