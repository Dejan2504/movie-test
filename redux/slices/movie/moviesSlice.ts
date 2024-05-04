import { createSlice } from "@reduxjs/toolkit";
import { moviesThunk } from "../../thunks/moviesThunks/moviesThunk";
import { singleMovieThunk } from "../../thunks/moviesThunks/singleMovieThunk";
import { searchMovieThunk } from "../../thunks/moviesThunks/searchMovieThunk";
import { moviesSliceType } from "../../../types/moviesType";

const initialState: moviesSliceType = {
  topMovies: [],
  loadingTopMovies: false,
  selectedMovie: {},
  loadingSelectedMovie: false,
  searchMovies: [],
  loadingSearchMovies: false,
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    clearSearchMoviesReducer: (state) => {
      state.searchMovies = [];
    },
    clearSelectedMovieReducer: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers(builder) {
    // Get top 10 movies
    builder.addCase(moviesThunk.pending, (state) => {
      state.loadingTopMovies = true;
    });
    builder.addCase(moviesThunk.fulfilled, (state, actions) => {
      state.topMovies = actions.payload.results.slice(10);
      state.loadingTopMovies = false;
    });
    builder.addCase(moviesThunk.rejected, (state) => {
      state.loadingTopMovies = false;
    });

    // Get single movie
    builder.addCase(singleMovieThunk.pending, (state) => {
      state.loadingSelectedMovie = true;
    });
    builder.addCase(singleMovieThunk.fulfilled, (state, actions) => {
      state.selectedMovie = actions.payload;
      state.loadingSelectedMovie = false;
    });
    builder.addCase(singleMovieThunk.rejected, (state) => {
      state.loadingSelectedMovie = false;
    });

    // Get searched movies
    builder.addCase(searchMovieThunk.pending, (state) => {
      state.loadingSearchMovies = true;
    });
    builder.addCase(searchMovieThunk.fulfilled, (state, actions) => {
      state.searchMovies = actions.payload.results;
      state.loadingSearchMovies = false;
    });
    builder.addCase(searchMovieThunk.rejected, (state) => {
      state.loadingSearchMovies = false;
    });
  },
});

export const { clearSearchMoviesReducer, clearSelectedMovieReducer } =
  moviesSlice.actions;

export default moviesSlice.reducer;
