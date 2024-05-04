import "./TvSeriesItem.css";
import { singleTvSerieType } from "../../../../types/tvSeriesType";
import { useNavigate } from "react-router-dom";

const MovieListItem = ({ serie }: { serie: singleTvSerieType }) => {
  const navigate = useNavigate();

  return (
    <div
      className="media_list_item"
      onClick={() => navigate(`/tv-serie/${serie.id}`)}
      style={{
        backgroundImage: serie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${serie.backdrop_path})`
          : `/assets/image-not-found.png`,
      }}
    >
      <div className="overlay">
        <div className="title">{serie.name}</div>
      </div>
    </div>
  );
};

export default MovieListItem;
