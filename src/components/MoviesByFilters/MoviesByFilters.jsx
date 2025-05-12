import { TOTAL_PAGES } from "../../constants/constants";
import MoviesFilters from "../MoviesFilters/MoviesFilters";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

const MoviesByFilters = ({ filters, changeFilter, isLoading, movies }) => {
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
      <h2 className={styles.hidden}>discovery movie by filters</h2>
      <MoviesFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <MoviesList isLoading={isLoading} movies={movies} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />
    </section>
  );
};

export default MoviesByFilters;
