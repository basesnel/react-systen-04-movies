import styles from "./styles.module.css";

const Genres = ({ genres, setSelectedGenre, selectedGenre }) => {
  return (
    <div className={styles.genres}>
      <button
        onClick={() => setSelectedGenre(null)}
        className={!selectedGenre?.name ? styles.active : styles.item}
      >
        Popular
      </button>
      {genres.map(({ id, name }) => {
        return (
          <button
            onClick={() => setSelectedGenre({ id: id, name: name })}
            className={
              selectedGenre?.name === name ? styles.active : styles.item
            }
            key={id}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Genres;
