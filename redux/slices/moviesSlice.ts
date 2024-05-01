import { createSlice } from "@reduxjs/toolkit";
import { authenticateThunk } from "../thunks/moviesThunks/authenticateThunk";

const initialState = {
  data: {},
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authenticateThunk.pending, () => {});
    builder.addCase(authenticateThunk.fulfilled, (state, actions) => {
      console.log(actions.payload);
    });
    builder.addCase(authenticateThunk.rejected, () => {});
  },
});

// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
