import styles from "./styles.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default MoviesList;
