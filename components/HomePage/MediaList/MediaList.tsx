import "./MediaList.css";
import useMovesApi from "../../../redux/api/useMoviesApi";
import { singleMovieType } from "../../../types/moviesType";
import useLayoutApi from "../../../redux/api/useLayoutApi";
import useTvSeriesApi from "../../../redux/api/useTvSeriesApi";
import { singleTvSerieType } from "../../../types/tvSeriesType";
import MovieListItem from "./MovieListItem/MovieListItem";
import TvSeriesItem from "./TvSeriesItem/TvSeriesItem";
import Loader from "../../../common/Loader/Loader";
import { useEffect } from "react";

const MediaList = () => {
  const { topMovies, loadingTopMovies, searchMovie } = useMovesApi();
  const { topTvSeries, loadingTopTvSeries, searchTvSerie } = useTvSeriesApi();
  const { mediaType } = useLayoutApi();

  useEffect(() => {}, [searchMovie]);

  if (loadingTopMovies || loadingTopTvSeries) return <Loader />;

  if (mediaType === "movie" && topMovies && searchMovie.length === 0) {
    return (
      <div className="media_list">
        {topMovies.map((movie: singleMovieType) => (
          <MovieListItem movie={movie} key={`movie-${movie.id}`} />
        ))}
      </div>
    );
  }

  if (mediaType === "tv_series" && topTvSeries && searchTvSerie.length === 0) {
    return (
      <div className="media_list">
        {topTvSeries.map((serie: singleTvSerieType) => (
          <TvSeriesItem serie={serie} key={`tv_serie-${serie.id}`} />
        ))}
      </div>
    );
  }

  if (mediaType === "movie" && searchMovie.length > 0) {
    return (
      <div className="media_list">
        {searchMovie.map((movie: singleMovieType) => (
          <MovieListItem movie={movie} key={`movie-${movie.id}`} />
        ))}
      </div>
    );
  }

  if (mediaType === "tv_series" && searchTvSerie.length > 0) {
    return (
      <div className="media_list">
        {searchTvSerie.map((serie: singleTvSerieType) => (
          <TvSeriesItem serie={serie} key={`movie-${serie.id}`} />
        ))}
      </div>
    );
  }
};

export default MediaList;
