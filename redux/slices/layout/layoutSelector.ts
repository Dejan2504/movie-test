export const mediaTypeSelector = (state: {
  layout: { mediaType: "movie" | "tv_series" };
}) => state.layout.mediaType;

export const searchInputSelector = (state: {
  layout: { searchInput: string };
}) => state.layout.searchInput;
