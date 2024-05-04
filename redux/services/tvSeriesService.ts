import axios from "axios";

const API_KEY = "ad1ed9bb086203b90ba24327abb22bac";

const getTvSeries = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

const getSingleTvSerie = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

const searchTvSeries = async (searchInput: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/tv?&api_key=${API_KEY}&query=${searchInput}&include_adult=false&language=en-US`
  );

  return response.data;
};

const tvSeriesService = { getTvSeries, getSingleTvSerie, searchTvSeries };

export default tvSeriesService;
