import LatestMovies from "../../components/LatestMovies/LatestMovies";
import MoviesByFilters from "../../components/MoviesByFilters/MoviesByFilters";
// import useDebounce from "../../helpers/hooks/useDebounce";
// import useFetch from "../../helpers/hooks/useFetch";
// import useFilters from "../../helpers/hooks/useFilters";
// import switchGet from "../../helpers/switchGet";

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
