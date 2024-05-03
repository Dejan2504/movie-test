import "./MovieListItem.css";
import { singleMovieType } from "../../../../types/moviesType";

const MovieListItem = ({ movie }: { movie: singleMovieType }) => {
  console.log(movie);
  return (
    <div
      className="media_list_item"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
    >
      <div className="overlay">
        <div className="title">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieListItem;
