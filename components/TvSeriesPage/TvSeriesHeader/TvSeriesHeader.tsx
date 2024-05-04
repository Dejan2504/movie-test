import "./TvSeriesHeader.css";
import useTvSeriesApi from "../../../redux/api/useTvSeriesApi";
import TvSeriesPoster from "./TvSeriesPoster/TvSeriesPoster";
import TvSeriesTitle from "./TvSeriesTitle/TvSeriesTitle";
import { useNavigate } from "react-router-dom";

const TvSeriesHeader = () => {
  const { selectedTvSerie, clearSelectedTvSeries } = useTvSeriesApi();
  const navigate = useNavigate();

  return (
    <div
      className="tv_series_header"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedTvSerie.backdrop_path})`,
      }}
    >
      <div
        className="back_button"
        onClick={() => {
          navigate(-1);
          clearSelectedTvSeries();
        }}
      >
        &lt; Back
      </div>

      <TvSeriesPoster poster={selectedTvSerie.poster_path} />
      <TvSeriesTitle
        title={selectedTvSerie.name}
        firstDate={selectedTvSerie.first_air_date}
        lastDate={selectedTvSerie.last_air_date}
      />
    </div>
  );
};

export default TvSeriesHeader;
