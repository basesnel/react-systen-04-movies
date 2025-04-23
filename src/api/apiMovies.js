import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_MOVIES_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const handleError = (error) => {
  if (error.response) {
    const { data, status, headers } = error.response;
    console.error(data);
    console.error(status);
    console.error(headers);
  } else if (error.request) {
    const { request } = error;
    console.error(request);
  } else {
    const { message } = error;
    console.error("Error", message);
  }
  console.log(error.config);
};

const getConfiguration = async () => {
  const options = {
    method: "GET",
    url: `${API_BASE_URL}configuration`,
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

const getMovies = async (page = 1) => {
  const options = {
    url: `${API_BASE_URL}movie/popular`,
    method: "GET",
    params: {
      language: "en-US",
      page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return axios
    .request(options)
    .then((res) => res.data)
    .catch(handleError);
};

const getMovieGenres = async () => {
  const options = {
    url: `${API_BASE_URL}genre/movie/list`,
    method: "GET",
    params: {
      language: "en",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return axios
    .request(options)
    .then((res) => res.data)
    .catch(handleError);
};

const getDiscoveryMovies = async () => {
  const options = {
    url: `${API_BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

export { getConfiguration, getMovies, getMovieGenres };
