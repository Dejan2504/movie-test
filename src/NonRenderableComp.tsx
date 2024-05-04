import { useEffect } from "react";
import useMovesApi from "../redux/api/useMoviesApi";
import useTvSeriesApi from "../redux/api/useTvSeriesApi";
import useLayoutApi from "../redux/api/useLayoutApi";

const NonRenderableComp = () => {
  const { searchMovie, fetchMovies, searchMovies, clearSearchMovies } =
    useMovesApi();
  const { searchTvSerie, fetchTvSeries, searchTvSeries, clearSearchTvSeries } =
    useTvSeriesApi();
  const { mediaType, searchInput } = useLayoutApi();

  useEffect(() => {
    if (mediaType === "movie") {
      fetchMovies();
    }

    if (mediaType === "tv_series") {
      fetchTvSeries();
    }
  }, [mediaType]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mediaType === "movie" && searchInput.length > 2) {
        searchMovies(searchInput);
      }

      if (mediaType === "tv_series" && searchInput.length > 2) {
        searchTvSeries(searchInput);
      }
    }, 1000);

    if (
      searchInput.length < 3 &&
      (searchMovie.length > 0 || searchTvSerie.length > 0)
    ) {
      clearSearchMovies();
      clearSearchTvSeries();
    }

    return () => clearTimeout(timeout);
  }, [mediaType, searchInput]);

  return <></>;
};

export default NonRenderableComp;
