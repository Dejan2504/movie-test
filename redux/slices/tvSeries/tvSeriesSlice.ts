import { createSlice } from "@reduxjs/toolkit";
import { tvSeriesThunk } from "../../thunks/tvSeriesThunks/tvSeriesThunks";
import { singleTvSerieThunk } from "../../thunks/tvSeriesThunks/singleTvSerieThunk";
import { searchTvSeriesThunk } from "../../thunks/tvSeriesThunks/searchTvSeriesThunk";

import { tvSeriesSliceType } from "../../../types/tvSeriesType";

const initialState: tvSeriesSliceType = {
  topTvSeries: [],
  loadingTopTvSeries: false,
  selectedTvSerie: {},
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
    clearSelectedTvSeriesReducer: (state) => {
      state.selectedTvSerie = {};
    },
  },
  extraReducers(builder) {
    // Get top 10 tv series
    builder.addCase(tvSeriesThunk.pending, (state) => {
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

export const { clearSearchTvSeriesReducer, clearSelectedTvSeriesReducer } =
  tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
