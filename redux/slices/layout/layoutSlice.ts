import { createSlice } from "@reduxjs/toolkit";
import { layoutSliceType } from "../../../types/layoutType";

const initialState: layoutSliceType = {
  mediaType: "movie",
  searchInput: "",
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    changeMediaType: (state, actions) => {
      state.mediaType = actions.payload;
    },
    searchInputChangeReducer: (state, actions) => {
      state.searchInput = actions.payload;
    },
  },
});

export const { changeMediaType, searchInputChangeReducer } =
  layoutSlice.actions;

export default layoutSlice.reducer;
