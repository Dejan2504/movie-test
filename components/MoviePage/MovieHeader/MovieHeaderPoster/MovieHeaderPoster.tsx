import "./MovieHeaderPoster.css";

const MovieHeaderPoster = ({ poster }: { poster: string | null }) => {
  return (
    <div className="poster">
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" />
    </div>
  );
};

export default MovieHeaderPoster;
