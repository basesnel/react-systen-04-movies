// import { getMovieGenres } from "../../api/apiMovies";
import { TOTAL_PAGES } from "../../constants/constants";
import MoviesFilters from "../MoviesFilters/MoviesFilters";
// import useFetch from "../../helpers/hooks/useFetch";
// import Genres from "../Genres/Genres";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
// import Search from "../Search/Search";
import styles from "./styles.module.css";

const MoviesByFilters = ({ filters, changeFilter, isLoading, movies }) => {
  // const { data: dataGenres } = useFetch(getMovieGenres);

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
      <MoviesFilters filters={filters} changeFilter={changeFilter} />
      {/* {dataGenres ? (
        <Genres
          genres={dataGenres.genres}
          selectedGenre={filters.with_genres}
          setSelectedGenre={(genre) => changeFilter("with_genres", genre)}
        />
      ) : null}

      <Search
        query={filters.query}
        setQuery={(query) => changeFilter("query", query)}
      /> */}

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
