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

const getMovies = async ({ page = 1 }) => {
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

const getDiscoveryMovies = async ({ page = 1, with_genres }) => {
  const options = {
    url: `${API_BASE_URL}discover/movie`,
    method: "GET",
    params: {
      include_adult: true,
      include_video: false,
      language: "en-US",
      page,
      sort_by: "popularity.desc",
      with_genres,
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

const getFoundMovies = async ({ page = 1, query }) => {
  const options = {
    url: `${API_BASE_URL}search/movie`,
    method: "GET",
    params: {
      include_adult: true,
      language: "en-US",
      page,
      query,
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

const getNowPlayingMovies = async ({ page = 1 }) => {
  const options = {
    url: `${API_BASE_URL}movie/now_playing`,
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
    .catch((err) => console.error(err));
};

export {
  getConfiguration,
  getMovies,
  getMovieGenres,
  getDiscoveryMovies,
  getFoundMovies,
  getNowPlayingMovies,
};
