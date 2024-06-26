import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { tvSeriesThunk } from "../thunks/tvSeriesThunks/tvSeriesThunks";
import { singleTvSerieThunk } from "../thunks/tvSeriesThunks/singleTvSerieThunk";
import { searchTvSeriesThunk } from "../thunks/tvSeriesThunks/searchTvSeriesThunk";
import {
  loadingSearchTvSeriesSelector,
  loadingSelectedTvSerieSelector,
  loadingTopTvSeriesSelector,
  searchTvSeriesSelector,
  selectedTvSeriesSelector,
  topTvSeriesSelector,
} from "../slices/tvSeries/tvSeriesSelector";
import {
  clearSearchTvSeriesReducer,
  clearSelectedTvSeriesReducer,
} from "../slices/tvSeries/tvSeriesSlice";

type disp = typeof store.dispatch;

const useTvSeriesApi = () => {
  const dispatch = useDispatch<disp>();

  const topTvSeries = useSelector(topTvSeriesSelector);
  const loadingTopTvSeries = useSelector(loadingTopTvSeriesSelector);

  const selectedTvSerie = useSelector(selectedTvSeriesSelector);
  const loadingSelectedTvSerie = useSelector(loadingSelectedTvSerieSelector);

  const searchTvSerie = useSelector(searchTvSeriesSelector);
  const loadingSearchTvSerie = useSelector(loadingSearchTvSeriesSelector);

  const fetchTvSeries = () => {
    dispatch(tvSeriesThunk());
  };

  const fetchSingleTvSerie = (id: string) => {
    dispatch(singleTvSerieThunk(id));
  };

  const searchTvSeries = (searchInput: string) => {
    dispatch(searchTvSeriesThunk(searchInput));
  };

  const clearSearchTvSeries = () => {
    dispatch(clearSearchTvSeriesReducer());
  };

  const clearSelectedTvSeries = () => {
    dispatch(clearSelectedTvSeriesReducer());
  };

  return {
    topTvSeries,
    loadingTopTvSeries,
    selectedTvSerie,
    loadingSelectedTvSerie,
    searchTvSerie,
    loadingSearchTvSerie,
    fetchTvSeries,
    fetchSingleTvSerie,
    searchTvSeries,
    clearSearchTvSeries,
    clearSelectedTvSeries,
  };
};

export default useTvSeriesApi;
