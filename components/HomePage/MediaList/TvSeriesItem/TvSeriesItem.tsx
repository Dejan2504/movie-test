import "./TvSeriesItem.css";
import { singleTvSerieType } from "../../../../types/tvSeriesType";

const MovieListItem = ({ serie }: { serie: singleTvSerieType }) => {
  return (
    <div
      className="media_list_item"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${serie.backdrop_path})`,
      }}
    >
      <div className="overlay">
        <div className="title">{serie.name}</div>
      </div>
    </div>
  );
};

export default MovieListItem;
