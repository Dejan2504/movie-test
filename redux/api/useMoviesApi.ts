import { store } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { moviesThunk } from "../thunks/moviesThunks/moviesThunk";
import { singleMovieThunk } from "../thunks/moviesThunks/singleMovieThunk";
import { searchMovieThunk } from "../thunks/moviesThunks/searchMovieThunk";
import {
  loadingSelectedMovieSelector,
  loadingTopMoviesSelector,
  searchMoviesSelector,
  selectedMovieSelector,
  topMoviesSelector,
} from "../slices/movie/moviesSelector";
import { clearSearchMoviesReducer } from "../slices/movie/moviesSlice";

type disp = typeof store.dispatch;

const useMovesApi = () => {
  const dispatch = useDispatch<disp>();

  const topMovies = useSelector(topMoviesSelector);
  const loadingTopMovies = useSelector(loadingTopMoviesSelector);

  const selectedMovie = useSelector(selectedMovieSelector);
  const loadingSelectedMovie = useSelector(loadingSelectedMovieSelector);

  const searchMovie = useSelector(searchMoviesSelector);
  const loadingSearchMovies = useSelector(loadingSelectedMovieSelector);

  const fetchMovies = () => {
    dispatch(moviesThunk());
  };

  const fetchSingleMovie = () => {
    dispatch(singleMovieThunk());
  };

  const searchMovies = (searchInput: string) => {
    dispatch(searchMovieThunk(searchInput));
  };

  const clearSearchMovies = () => {
    dispatch(clearSearchMoviesReducer());
  };

  return {
    topMovies,
    loadingTopMovies,
    selectedMovie,
    loadingSelectedMovie,
    searchMovie,
    loadingSearchMovies,
    fetchMovies,
    fetchSingleMovie,
    searchMovies,
    clearSearchMovies,
  };
};

export default useMovesApi;
