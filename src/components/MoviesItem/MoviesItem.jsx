import formatTimeDiff from "../../helpers/formatTimeDiff";
import roundToTwo from "../../helpers/formatRoundToTwo";

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
        <p className={styles.extra}>{`Release: ${item.release_date}`}</p>
        <p className={styles.extra}>{`(${formatTimeDiff(
          item.release_date
        )})`}</p>
        <p className={styles.extra}>{`score: ${roundToTwo(
          item.vote_average
        )} (votes: ${item.vote_count})`}</p>
      </div>
    </li>
  );
};

export default MoviesItem;
