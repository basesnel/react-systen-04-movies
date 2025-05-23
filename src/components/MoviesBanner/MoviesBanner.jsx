import formatTimeDiff from "../../helpers/formatTimeDiff";
import formatRoundToTwo from "../../helpers/formatRoundToTwo";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {"Release: "}
          <span className={styles.highlighted}>{`${item.release_date}`}</span>
          {" | "}
          <span className={styles.highlighted}>{`(${formatTimeDiff(
            item.release_date
          )})`}</span>
          {" | score: "}
          <span className={styles.highlighted}>{`${formatRoundToTwo(
            item.vote_average
          )}`}</span>
          {" (votes: "}
          <span className={styles.highlighted}>{`${item.vote_count})`}</span>
          {" | popularity: "}
          <span className={styles.highlighted}>{`${formatRoundToTwo(
            item.popularity
          )}`}</span>
        </p>
      </div>
    </div>
  );
};

export default MoviesBanner;
