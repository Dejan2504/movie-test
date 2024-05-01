import axios from "axios";

const authenticate = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/authentication?api_key=ad1ed9bb086203b90ba24327abb22bac"
  );

  return response.data;
};

const movieService = { authenticate };

export default movieService;
