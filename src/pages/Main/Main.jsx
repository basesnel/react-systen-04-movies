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
import { TOTAL_PAGES } from "../../constants/constants";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";

import styles from "./styles.module.css";

const Main = () => {
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieQuery, setMovieQuery] = useState("");
  const [selectedMovieGenres, setSelectedMovieGenres] = useState({
    id: 1,
    name: "Popular",
  });

  const debouncedMovieQwery = useDebounce(movieQuery, 1500);

  const switchGet = ({ queryLength, selectedGenreName }) => {
    if (queryLength)
      return {
        getFunction: getFoundMovies,
        params: { page: currentPage, query: debouncedMovieQwery },
      };

    if (!queryLength && selectedGenreName === "Popular")
      return {
        getFunction: getMovies,
        params: { page: currentPage },
      };

    return {
      getFunction: getDiscoveryMovies,
      params: { page: currentPage, with_genres: selectedMovieGenres.id },
    };
  };

  const { getFunction, params } = switchGet({
    queryLength: debouncedMovieQwery.length,
    selectedGenreName: selectedMovieGenres.name,
  });

  const { data, error, isLoading } = useFetch(getFunction, params);

  // const fetchMovies = async (currentPage) => {
  //   try {
  //     setIsLoading(true);

  //     const response = await getFunction(params);

  //     setIsLoading(false);
  //     setMovies(response.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  // useEffect(() => {
  //   fetchMovies(currentPage);
  // }, [currentPage, selectedMovieGenres, debouncedMovieQwery]);

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
        item={data && data.results && data.results[0]}
      />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
      />

      <MoviesList isLoading={isLoading} movies={data?.results} />

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
