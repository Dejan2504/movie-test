import { createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../services/moviesService";

export const authenticateThunk = createAsyncThunk(
  "authenticateThunk",
  async () => {
    const data = await movieService.authenticate();

    console.log(data);
    return data;
  }
);
