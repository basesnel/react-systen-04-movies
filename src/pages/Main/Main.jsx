import {
  getMovies,
  getMovieGenres,
  getDiscoveryMovies,
  getFoundMovies,
} from "../../api/apiMovies";
import Genres from "../../components/Genres/Genres";
import LatestMovies from "../../components/LatestMovies/LatestMovies";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesByFilters from "../../components/MoviesByFilters/MoviesByFilters";
import MoviesList from "../../components/MoviesList/MoviesList";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { TOTAL_PAGES } from "../../constants/constants";
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
  // const { data: dataGenres } = useFetch(getMovieGenres);

  // const handleNextPage = () => {
  //   if (filters.page < TOTAL_PAGES) {
  //     changeFilter("page", filters.page + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (filters.page > 1) {
  //     changeFilter("page", filters.page - 1);
  //   }
  // };

  // const handlePageClick = (pageNumber) => {
  //   changeFilter("page", pageNumber);
  // };

  return (
    <main className={styles.main}>
      <LatestMovies isLoading={isLoading} banners={data && data.results} />

      <MoviesByFilters
        movies={data?.results}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />

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
      />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <MoviesList isLoading={isLoading} movies={data?.results} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      /> */}
    </main>
  );
};

export default Main;
