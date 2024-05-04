import { createAsyncThunk } from "@reduxjs/toolkit";
import tvSeriesService from "../../services/tvSeriesService";

export const singleTvSerieThunk = createAsyncThunk(
  "singleTvSerieThunk",
  async (id: string, thunkAPI) => {
    try {
      const result = await tvSeriesService.getSingleTvSerie(id);

      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
