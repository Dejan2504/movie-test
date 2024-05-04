import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useTvSeriesApi from "../../redux/api/useTvSeriesApi";
import Loader from "../../common/Loader/Loader";
import TvSeriesHeader from "./TvSeriesHeader/TvSeriesHeader";
import TvSeriesDescription from "./TvSeriesDescription/TvSeriesDescription";
import TvSeriesButton from "./TvSeriesButton/TvSeriesButton";

const TvSeriesPage = () => {
  const { id } = useParams();
  const { selectedTvSerie, fetchSingleTvSerie } = useTvSeriesApi();

  useEffect(() => {
    if (!id) return;

    fetchSingleTvSerie(id);
  }, []);

  if (!selectedTvSerie.id) return <Loader />;

  return (
    <div className="tv_series_page">
      <TvSeriesHeader />
      <TvSeriesDescription />
      <TvSeriesButton />
    </div>
  );
};

export default TvSeriesPage;
