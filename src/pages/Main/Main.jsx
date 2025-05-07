import { useState } from "react";
import { useEffect } from "react";
import {
  getMovies,
  getMovieGenres,
  getDiscoveryMovies,
  getFoundMovies,
} from "../../api/apiMovies";
import Genres from "../../components/Genres/Genres";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesList from "../../components/MoviesList/MoviesList";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Skeleton from "../../components/Skeleton/Skeleton";
import { TOTAL_PAGES } from "../../constants/constants";
import useDebounce from "../../helpers/hooks/useDebounce";

import styles from "./styles.module.css";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieQuery, setMovieQuery] = useState("");
  const [selectedMovieGenres, setSelectedMovieGenres] = useState({
    id: 1,
    name: "Popular",
  });

  const debouncedMovieQwery = useDebounce(movieQuery, 1500);

  const fetchMovies = async (currentPage) => {
    try {
      setIsLoading(true);

      const response = movieQuery.length
        ? await getFoundMovies({
            page: currentPage,
            query: debouncedMovieQwery,
          })
        : selectedMovieGenres.name === "Popular"
        ? await getMovies(currentPage)
        : await getDiscoveryMovies({
            page: currentPage,
            with_genres: selectedMovieGenres.id,
          });

      setIsLoading(false);
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMovieGenres = async () => {
    try {
      const response = await getMovieGenres();
      setMovieGenres([{ id: 1, name: "Popular" }, ...response.genres]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieGenres();
  }, []);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage, selectedMovieGenres, debouncedMovieQwery]);

  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Genres
        genres={movieGenres}
        setSelectedGenre={setSelectedMovieGenres}
        selectedGenre={selectedMovieGenres}
      />

      <Search query={movieQuery} setQuery={setMovieQuery} />

      <MoviesBanner
        isLoading={isLoading}
        item={movies.length > 0 && movies[0]}
      />

      {/* {movies.length > 0 && !isLoading ? (
        <MoviesBanner item={movies[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )} */}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
      />

      <MoviesList isLoading={isLoading} movies={movies} />

      {/* {!isLoading ? (
        <MoviesList movies={movies} />
      ) : (
        <Skeleton type="item" count={20} />
      )} */}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
