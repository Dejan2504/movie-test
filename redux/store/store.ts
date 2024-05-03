import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movie/moviesSlice";
import tvSeriesReducer from "../slices/tvSeries/tvSeriesSlice";
import layoutReducer from "../slices/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvSeriesReducer,
    layout: layoutReducer,
  },
});
