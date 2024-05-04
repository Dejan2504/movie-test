import "./TvSeriesButton.css";

import useTvSeriesApi from "../../../redux/api/useTvSeriesApi";

const TvSeriesButton = () => {
  const { selectedTvSerie } = useTvSeriesApi();

  if (!selectedTvSerie.homepage) return;

  return (
    <div className="tv_series_button">
      <a href={selectedTvSerie.homepage}>
        <button>Go to offical page</button>
      </a>
    </div>
  );
};

export default TvSeriesButton;
