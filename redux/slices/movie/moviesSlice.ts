import { createSlice } from "@reduxjs/toolkit";
import { moviesThunk } from "../../thunks/moviesThunks/moviesThunk";
import { singleMovieThunk } from "../../thunks/moviesThunks/singleMovieThunk";
import { searchMovieThunk } from "../../thunks/moviesThunks/searchMovieThunk";
import { moviesSliceType } from "../../../types/moviesType";

const initialState: moviesSliceType = {
  topMovies: [
    {
      backdrop_path: null,
      id: 1,
      original_title: null,
      overview: null,
      poster_path: null,
      media_type: "",
      adult: false,
      title: "",
      original_language: "",
      genre_ids: [],
      popularity: 0,
      release_date: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
  loadingTopMovies: false,
  selectedMovie: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [{ id: 0, name: "" }],
    homepage: "",
    id: 0,
    imdb_id: "",
    origin_country: [],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: "",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "",
        name: "",
      },
    ],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [
      {
        english_name: "",
        iso_639_1: "",
        name: "",
      },
    ],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
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
      console.log(actions.payload);
      state.searchMovies = actions.payload.results;
      state.loadingSearchMovies = false;
    });
    builder.addCase(searchMovieThunk.rejected, (state) => {
      state.loadingSearchMovies = false;
    });
  },
});

export const { clearSearchMoviesReducer } = moviesSlice.actions;

export default moviesSlice.reducer;
