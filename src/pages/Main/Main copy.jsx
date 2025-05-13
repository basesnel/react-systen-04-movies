import LatestMovies from "../../components/LatestMovies/LatestMovies";
import MoviesByFilters from "../../components/MoviesByFilters/MoviesByFilters";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";
import useFilters from "../../helpers/hooks/useFilters";
import switchGet from "../../helpers/switchGet";

import styles from "./styles.module.css";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    query: "",
    with_genres: null,
  });

  const debouncedMovieQwery = useDebounce(filters.query, 1500);

  const { getFunction, params } = switchGet({
    query: debouncedMovieQwery,
    filters: filters,
  });

  const { data, error, isLoading } = useFetch(getFunction, params);

  return (
    <main className={styles.main}>
      <LatestMovies />

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
