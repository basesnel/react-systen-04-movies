import { forwardRef } from "react";
import styles from "./styles.module.css";

const Genres = forwardRef(
  ({ genres, setSelectedGenre, selectedGenre }, ref) => {
    return (
      <div ref={ref} className={styles.genres}>
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
  }
);

Genres.displayName = "Genres";

export default Genres;
