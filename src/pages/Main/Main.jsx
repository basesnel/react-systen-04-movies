import { useEffect } from "react";
import getMovies from "../../api/apiMovies";
import MoviesBanner from "../../components/MoviesBanner/MoviesBanner";
import styles from "./styles.module.css";

const Main = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        // console.log(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <main className={styles.main}>
      <MoviesBanner />
    </main>
  );
};

export default Main;
