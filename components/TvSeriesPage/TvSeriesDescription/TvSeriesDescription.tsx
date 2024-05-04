import React from "react";
import "./TvSeriesDescription.css";
import useTvSeriesApi from "../../../redux/api/useTvSeriesApi";

const TvSeriesDescription = () => {
  const { selectedTvSerie } = useTvSeriesApi();
  return (
    <div className="tv_series_description">
      <div className="tv_series_overview-title">Movie overview:</div>
      <div className="tv_series_overview">{selectedTvSerie.overview}</div>
    </div>
  );
};

export default TvSeriesDescription;
