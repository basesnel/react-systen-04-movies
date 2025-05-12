import {
  getDiscoveryMovies,
  getFoundMovies,
  getMovies,
} from "../api/apiMovies";

const switchGet = ({ query, filters }) => {
  if (query?.length)
    return {
      getFunction: getFoundMovies,
      params: { page: filters.page, query },
    };

  if (!query?.length && !filters?.with_genres?.name)
    return {
      getFunction: getMovies,
      params: { page: filters?.page },
    };

  return {
    getFunction: getDiscoveryMovies,
    params: { page: filters.page, with_genres: filters.with_genres.id },
  };
};

export default switchGet;
