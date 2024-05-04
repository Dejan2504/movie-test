import {
  selectedTvSerieType,
  singleTvSerieType,
} from "../../../types/tvSeriesType";

export const topTvSeriesSelector = (state: {
  tv: { topTvSeries: singleTvSerieType[] };
}) => state.tv.topTvSeries;

export const loadingTopTvSeriesSelector = (state: {
  tv: { loadingTopTvSeries: boolean };
}) => state.tv.loadingTopTvSeries;

export const selectedTvSeriesSelector = (state: {
  tv: { selectedTvSerie: selectedTvSerieType };
}) => state.tv.selectedTvSerie;

export const loadingSelectedTvSerieSelector = (state: {
  tv: { loadingSelectedTvSerie: boolean };
}) => state.tv.loadingSelectedTvSerie;

export const searchTvSeriesSelector = (state: {
  tv: { searchTvSeries: singleTvSerieType[] };
}) => state.tv.searchTvSeries;

export const loadingSearchTvSeriesSelector = (state: {
  tv: { loadingSearchTvSeries: boolean };
}) => state.tv.loadingSearchTvSeries;
