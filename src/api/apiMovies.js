import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_MOVIES_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const getMovies = async () => {
  const options = {
    url: `${API_BASE_URL}movie/popular`,
    method: "GET",
    params: {
      language: "en-US",
      page: 1,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export default getMovies;
