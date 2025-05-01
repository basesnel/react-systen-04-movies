import { useState } from "react";
import { useEffect } from "react";
import {
  getMovies,
  getMovieGenres,
  getDiscoveryMovies,
} from "../../api/apiMovies";
import Genres from "../../components/Genres/Genres";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesList from "../../components/MoviesList/MoviesList";
import Pagination from "../../components/Pagination/Pagination";
import Skeleton from "../../components/Skeleton/Skeleton";

import styles from "./styles.module.css";

const Main = () => {
  const [movies, setMovies] = useState([]);
  // const [discoveryMovies, setDiscoveryMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedMovieGenres, setSelectedMovieGenres] = useState(null);
  const totalPages = 10;

  const fetchMovies = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = !selectedMovieGenres
        ? await getMovies(currentPage)
        : await getDiscoveryMovies(currentPage);
      console.log(response);

      // temporary get discovery movie (start):
      console.log("discovery movies:");
      await getDiscoveryMovies(currentPage);
      // temporary get discovery movie (end):

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

  // console.log(movieGenres);

  // const fetchDiscoveryMovies = async (currentPage) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await getDiscoveryMovies({
  //       page: currentPage,
  //       with_genres:
  //         selectedMovieGenres === "Popular" ? null : selectedMovieGenres,
  //     });
  //     console.log(response);
  //     setIsLoading(false);
  //     setMovies(response.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    fetchMovieGenres();
  }, []);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage, selectedMovieGenres]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
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

      {movies.length > 0 && !isLoading ? (
        <MoviesBanner item={movies[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <MoviesList movies={movies} />
      ) : (
        <Skeleton type="item" count={20} />
      )}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
