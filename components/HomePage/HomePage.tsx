import { useEffect } from "react";
import "./HomePage.css";
import MediaPicker from "./MediaPicker/MediaPicker";
import SearchMedia from "./SearchMedia/SearchMedia";
import MediaList from "./MediaList/MediaList";
import useMovesApi from "../../redux/api/useMoviesApi";
import useTvSeriesApi from "../../redux/api/useTvSeriesApi";

const HomePage = () => {
  const { selectedMovie, clearSelectedMovie } = useMovesApi();
  const { selectedTvSerie, clearSelectedTvSeries } = useTvSeriesApi();

  useEffect(() => {
    if (selectedMovie.id) {
      clearSelectedMovie();
    }

    if (selectedTvSerie.id) {
      clearSelectedTvSeries();
    }
  }, []);

  return (
    <div className="home_page">
      <MediaPicker />
      <SearchMedia />
      <MediaList />
    </div>
  );
};

export default HomePage;
