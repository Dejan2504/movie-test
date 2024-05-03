import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import {
  changeMediaType,
  searchInputChangeReducer,
} from "../slices/layout/layoutSlice";
import {
  mediaTypeSelector,
  searchInputSelector,
} from "../slices/layout/layoutSelector";

type disp = typeof store.dispatch;

const useLayoutApi = () => {
  const dispatch = useDispatch<disp>();

  const mediaType = useSelector(mediaTypeSelector);
  const searchInput = useSelector(searchInputSelector);

  const changeMedia = (payload: "movie" | "tv_series") => {
    dispatch(changeMediaType(payload));
  };

  const changeSearchInput = (payload: string) => {
    dispatch(searchInputChangeReducer(payload));
  };

  return { mediaType, searchInput, changeMedia, changeSearchInput };
};

export default useLayoutApi;
