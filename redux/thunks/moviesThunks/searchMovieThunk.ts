import { createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/moviesService";

export const searchMovieThunk = createAsyncThunk(
  "searchMovieThunk",
  async (searchInput: string, thunkAPI) => {
    try {
      const data = await movieService.searchMovie(searchInput);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
