import { createSlice } from "@reduxjs/toolkit";
import { tvSeriesThunk } from "../../thunks/tvSeriesThunks/tvSeriesThunks";
import { singleTvSerieThunk } from "../../thunks/tvSeriesThunks/singleTvSerieThunk";
import { searchTvSeriesThunk } from "../../thunks/tvSeriesThunks/searchTvSeriesThunk";

import { tvSeriesSliceType } from "../../../types/tvSeriesType";

const initialState: tvSeriesSliceType = {
  topTvSeries: [
    {
      backdrop_path: "",
      id: 0,
      original_name: "",
      overview: "",
      poster_path: "",
      media_type: "",
      adult: false,
      name: "",
      original_language: "",
      genre_ids: [],
      popularity: 0,
      first_air_date: "",
      vote_average: 0,
      vote_count: 0,
      origin_country: [],
    },
  ],
  loadingTopTvSeries: false,
  selectedTvSerie: {
    adult: false,
    backdrop_path: null,
    created_by: [
      {
        id: 0,
        credit_id: "",
        name: "",
        original_name: "",
        gender: 0,
        profile_path: null,
      },
    ],
    episode_run_time: [],
    first_air_date: null,
    genres: [
      {
        id: 0,
        name: "",
      },
    ],
    homepage: "",
    id: 0,
    in_production: false,
    languages: [],
    last_air_date: null,
    last_episode_to_air: {
      id: 0,
      overview: "",
      name: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "",
      episode_number: 0,
      episode_type: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
    },
    name: "",
    next_episode_to_air: null,
    networks: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: "",
      },
    ],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: "",
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
    seasons: [
      {
        air_date: "",
        episode_count: 0,
        id: 0,
        name: "",
        overview: "",
        poster_path: "",
        season_number: 0,
        vote_average: 0,
      },
    ],
    spoken_languages: [
      {
        english_name: "",
        iso_639_1: "",
        name: "",
      },
    ],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
  },
  loadingSelectedTvSerie: false,
  searchTvSeries: [],
  loadingSearchTvSeries: false,
};

const tvSeriesSlice = createSlice({
  name: "tvSeriesSlice",
  initialState,
  reducers: {
    clearSearchTvSeriesReducer: (state) => {
      state.searchTvSeries = [];
    },
  },
  extraReducers(builder) {
    // Get top 10 tv series
    builder.addCase(tvSeriesThunk.pending, (state) => {
      console.log("aaa");
      state.loadingTopTvSeries = true;
    });
    builder.addCase(tvSeriesThunk.fulfilled, (state, actions) => {
      state.topTvSeries = actions.payload.results.slice(10);
      state.loadingTopTvSeries = false;
    });
    builder.addCase(tvSeriesThunk.rejected, (state) => {
      state.loadingTopTvSeries = false;
    });

    // Get single tv serie
    builder.addCase(singleTvSerieThunk.pending, (state) => {
      state.loadingSelectedTvSerie = true;
    });
    builder.addCase(singleTvSerieThunk.fulfilled, (state, actions) => {
      state.selectedTvSerie = actions.payload;
      state.loadingSelectedTvSerie = false;
    });
    builder.addCase(singleTvSerieThunk.rejected, (state) => {
      state.loadingSelectedTvSerie = false;
    });

    // search tv series
    builder.addCase(searchTvSeriesThunk.pending, (state) => {
      state.loadingSearchTvSeries = true;
    });
    builder.addCase(searchTvSeriesThunk.fulfilled, (state, actions) => {
      state.searchTvSeries = actions.payload.results;
      state.loadingSearchTvSeries = false;
    });
    builder.addCase(searchTvSeriesThunk.rejected, (state) => {
      state.loadingSearchTvSeries = false;
    });
  },
});

export const { clearSearchTvSeriesReducer } = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
