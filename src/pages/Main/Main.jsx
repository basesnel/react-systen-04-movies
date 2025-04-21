import { useState } from "react";
import { useEffect } from "react";
import getMovies from "../../api/apiMovies";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import MoviesList from "../../components/MoviesList/MoviesList";

import styles from "./styles.module.css";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        console.log(response);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className={styles.main}>
      {movies.length > 0 ? <MoviesBanner item={movies[0]} /> : null}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Main;
