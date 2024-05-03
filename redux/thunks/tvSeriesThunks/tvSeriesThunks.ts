import { createAsyncThunk } from "@reduxjs/toolkit";
import tvSeriesService from "../../services/tvSeriesService";

export const tvSeriesThunk = createAsyncThunk("tvSeriesThunk", async () => {
  const result = await tvSeriesService.getTvSeries();

  return result;
});
