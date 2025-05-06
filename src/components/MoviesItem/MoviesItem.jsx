import formatTimeDiff from "../../helpers/formatTimeDiff";
import formatRoundToTwo from "../../helpers/formatRoundToTwo";

import styles from "./styles.module.css";

const MoviesItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${item?.poster_path})`,
        }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          Release:{" "}
          <span className={styles.highlighted}>{`${item.release_date}`}</span>
        </p>
        <p className={styles.extra}>
          {"("}
          <span className={styles.highlighted}>{`${formatTimeDiff(
            item.release_date
          )}`}</span>
          {")"}
        </p>
        <p className={styles.extra}>
          score:
          <span className={styles.highlighted}>{`${formatRoundToTwo(
            item.vote_average
          )}`}</span>
          {" (votes: "}
          <span className={styles.highlighted}>{`${item.vote_count}`}</span>
          {")"}
        </p>
        <p className={styles.extra}>
          popularity:{" "}
          <span className={styles.highlighted}>{`${formatRoundToTwo(
            item.popularity
          )}`}</span>
        </p>
      </div>
    </li>
  );
};

export default MoviesItem;
