import {
  getMovies,
  getDiscoveryMovies,
  getFoundMovies,
} from "../../api/apiMovies";
import LatestMovies from "../../components/LatestMovies/LatestMovies";
import MoviesByFilters from "../../components/MoviesByFilters/MoviesByFilters";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";
import useFilters from "../../helpers/hooks/useFilters";

import styles from "./styles.module.css";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    query: "",
    with_genres: null,
  });

  const debouncedMovieQwery = useDebounce(filters.query, 1500);

  const switchGet = ({ queryLength, selectedGenreName }) => {
    if (queryLength)
      return {
        getFunction: getFoundMovies,
        params: { page: filters.page, query: debouncedMovieQwery },
      };

    if (!queryLength && !selectedGenreName)
      return {
        getFunction: getMovies,
        params: { page: filters.page },
      };

    return {
      getFunction: getDiscoveryMovies,
      params: { page: filters.page, with_genres: filters.with_genres.id },
    };
  };

  const { getFunction, params } = switchGet({
    queryLength: debouncedMovieQwery.length,
    selectedGenreName: filters?.with_genres?.name,
  });

  const { data, error, isLoading } = useFetch(getFunction, params);

  return (
    <main className={styles.main}>
      <LatestMovies isLoading={isLoading} banners={data && data.results} />

      <MoviesByFilters
        movies={data?.results}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
