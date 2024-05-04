import "./TvSeriesPoster.css";

const TvSeriesPoster = ({ poster }: { poster: string | null }) => {
  return (
    <div className="poster">
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" />
    </div>
  );
};

export default TvSeriesPoster;
