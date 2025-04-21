import MoviesItem from "../MoviesItem/MoviesItem";
import styles from "./styles.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((item) => {
        return <MoviesItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default MoviesList;
