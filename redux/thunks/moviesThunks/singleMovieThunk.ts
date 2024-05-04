import { createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/moviesService";

export const singleMovieThunk = createAsyncThunk(
  "singleMovieThunk",
  async (id: string, thunkAPI) => {
    try {
      const data = await movieService.getSingleMovie(id);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
