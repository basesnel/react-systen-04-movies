import roundToTwo from "../../helpers/formatRoundToTwo";
import formatTimeDiff from "../../helpers/formatTimeDiff";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {`Release: ${item.release_date} | (${formatTimeDiff(
          item.release_date
        )}) | score: ${roundToTwo(item.vote_average)} (votes: ${
          item.vote_count
        })`}
      </p>
    </div>
  );
};

export default MoviesBanner;
