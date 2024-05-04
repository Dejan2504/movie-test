import "./MovieListItem.css";
import { singleMovieType } from "../../../../types/moviesType";
import { useNavigate } from "react-router-dom";

const MovieListItem = ({ movie }: { movie: singleMovieType }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie_list_item"
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={
        movie.backdrop_path !== null
          ? {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }
          : {
              backgroundPosition: "center",
              backgroundImage: `url(/assets/image-not-found.png)`,
            }
      }
    >
      <div className="overlay">
        <div className="title">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieListItem;
