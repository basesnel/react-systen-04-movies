import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default MoviesBanner;
