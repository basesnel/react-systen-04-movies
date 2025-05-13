import LatestMovies from "../../components/LatestMovies/LatestMovies";
import MoviesByFilters from "../../components/MoviesByFilters/MoviesByFilters";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestMovies />
      <MoviesByFilters />
    </main>
  );
};

export default Main;
