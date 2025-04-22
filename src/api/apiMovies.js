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
    .catch(handleError);
};

export default getMovies;
