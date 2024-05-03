import { selectedMovieType, singleMovieType } from "../../../types/moviesType";

export const topMoviesSelector = (state: {
  movies: { topMovies: singleMovieType[] };
}) => state.movies.topMovies;

export const loadingTopMoviesSelector = (state: {
  movies: { loadingTopMovies: boolean };
}) => state.movies.loadingTopMovies;

export const selectedMovieSelector = (state: {
  movies: { selectedMovie: selectedMovieType };
}) => state.movies.selectedMovie;

export const loadingSelectedMovieSelector = (state: {
  movies: { loadingSelectedMovie: boolean };
}) => state.movies.loadingSelectedMovie;

export const searchMoviesSelector = (state: {
  movies: { searchMovies: singleMovieType[] };
}) => state.movies.searchMovies;

export const loadingSearchMoviesSelector = (state: {
  movies: { loadingSearchMovies: boolean };
}) => state.movies.loadingSearchMovies;
