import axios from "axios";

const API_KEY = "ad1ed9bb086203b90ba24327abb22bac";

const getMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}&include_adult=false`
  );

  return response.data;
};

const getSingleMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/299536?api_key=${API_KEY}`
  );

  return response.data;
};

const searchMovie = async (searchInput: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchInput}&include_adult=false&language=en-US`
  );

  return response.data;
};

const movieService = { getMovies, getSingleMovie, searchMovie };

export default movieService;
