import { createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/moviesService";

export const singleMovieThunk = createAsyncThunk(
  "singleMovieThunk",
  async () => {
    const data = await movieService.getSingleMovie();

    return data;
  }
);
