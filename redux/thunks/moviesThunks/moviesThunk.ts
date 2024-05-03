import { createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/moviesService";

export const moviesThunk = createAsyncThunk("moviesThunk", async () => {
  const data = await movieService.getMovies();

  return data;
});
