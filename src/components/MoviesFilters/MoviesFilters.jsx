import { getMovieGenres } from "../../api/apiMovies";
import useFetch from "../../helpers/hooks/useFetch";
import Genres from "../Genres/Genres";
import Search from "../Search/Search";

import styles from "./styles.module.css";

const MoviesFilters = ({ filters, changeFilter }) => {
  const { data: dataGenres } = useFetch(getMovieGenres);
  return (
    <div className={styles.filters}>
      {dataGenres ? (
        <Genres
          genres={dataGenres.genres}
          selectedGenre={filters.with_genres}
          setSelectedGenre={(genre) => changeFilter("with_genres", genre)}
        />
      ) : null}

      <Search
        query={filters.query}
        setQuery={(query) => changeFilter("query", query)}
      />
    </div>
  );
};

export default MoviesFilters;
