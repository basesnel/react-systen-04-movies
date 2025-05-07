import formatTimeDiff from "../../helpers/formatTimeDiff";
import formatRoundToTwo from "../../helpers/formatRoundToTwo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} />
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
  );
};

const MoviesBannerWithSkeleton = withSkeleton(MoviesBanner, "banner", 1);

export default MoviesBannerWithSkeleton;
