import { createAsyncThunk } from "@reduxjs/toolkit";
import tvSeriesService from "../../services/tvSeriesService";

export const singleTvSerieThunk = createAsyncThunk(
  "singleTvSerieThunk",
  async () => {
    const result = await tvSeriesService.getSingleTvSerie();

    return result;
  }
);
