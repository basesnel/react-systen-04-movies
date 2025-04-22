import formatTimeAgo from "../../helpers/formatTimeAgo";

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
          {`Release: ${item.release_date} (${formatTimeAgo(
            item.release_date
          )}) | ${item.vote_average}`}
        </p>
      </div>
    </li>
  );
};

export default MoviesItem;
