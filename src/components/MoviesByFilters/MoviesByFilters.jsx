import { TOTAL_PAGES } from "../../constants/constants";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";
import useFilters from "../../helpers/hooks/useFilters";
import switchGet from "../../helpers/switchGet";
import HiddenTitle from "../HiddenTitle/HiddenTitle";
import MoviesFilters from "../MoviesFilters/MoviesFilters";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const MoviesByFilters = () => {
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

  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      changeFilter("page", filters.page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      changeFilter("page", filters.page - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page", pageNumber);
  };

  return (
    <section className={styles.section}>
      <HiddenTitle title="discovery movie by filters" />

      <MoviesFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      >
        <MoviesList isLoading={isLoading} movies={data?.results} />
      </PaginationWrapper>
    </section>
  );
};

export default MoviesByFilters;
