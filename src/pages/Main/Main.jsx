import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../../api/apiMovies";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesList from "../../components/MoviesList/MoviesList";
import Skeleton from "../../components/Skeleton/Skeleton";

import styles from "./styles.module.css";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;

  const fetchMovies = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getMovies(currentPage);
      console.log(response);
      setIsLoading(false);
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <main className={styles.main}>
      {movies.length > 0 && !isLoading ? (
        <MoviesBanner item={movies[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      {!isLoading ? (
        <MoviesList movies={movies} />
      ) : (
        <Skeleton type="item" count={20} />
      )}
    </main>
  );
};

export default Main;
