import React, { useEffect } from "react";
import "./MoviePage.css";
import { useParams } from "react-router-dom";
import useMovesApi from "../../redux/api/useMoviesApi";
import Loader from "../../common/Loader/Loader";

import MovieHeader from "./MovieHeader/MovieHeader";
import MovieDescription from "./MovieDescription/MovieDescription";
import MovieButton from "./MovieButton/MovieButton";

const MoviePage = () => {
  const { id } = useParams();
  const { selectedMovie, fetchSingleMovie } = useMovesApi();

  useEffect(() => {
    if (!id) return;

    fetchSingleMovie(id);
  }, []);

  if (!selectedMovie.id) return <Loader />;

  return (
    <div className="movie_page">
      <MovieHeader />
      <MovieDescription />
      <MovieButton />
    </div>
  );
};

export default MoviePage;
