import formatTimeAgo from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {`released ${formatTimeAgo(item.release_date)} | ${item.vote_average}`}
      </p>
    </div>
  );
};

export default MoviesBanner;
