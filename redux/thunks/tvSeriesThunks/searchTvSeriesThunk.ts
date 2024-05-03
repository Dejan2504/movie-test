2;
import { createAsyncThunk } from "@reduxjs/toolkit";
import tvSeriesService from "../../services/tvSeriesService";

export const searchTvSeriesThunk = createAsyncThunk(
  "searchTvSeriesThunk",
  async (searchInput: string, thunkAPI) => {
    try {
      const result = await tvSeriesService.searchTvSeries(searchInput);

      return result;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
