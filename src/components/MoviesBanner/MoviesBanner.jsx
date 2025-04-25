import formatTimeAgo from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  const threeYearsAgo = "2022-04-25";
  const twoYearsAgo = "2023-04-25";
  const oneYearAndMonths = "2023-06-20";
  const oneYearAndMonth = "2024-03-20";

  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {`Release: ${item.release_date} (${formatTimeAgo(
          item.release_date
        )}) | ${item.vote_average}`}
      </p>
      <p>{`${threeYearsAgo} (${formatTimeAgo(threeYearsAgo)})`}</p>
      <p>{`${twoYearsAgo} (${formatTimeAgo(twoYearsAgo)})`}</p>
      <p>{`${oneYearAndMonths} (${formatTimeAgo(oneYearAndMonths)})`}</p>
      <p>{`${oneYearAndMonth} (${formatTimeAgo(oneYearAndMonth)})`}</p>
    </div>
  );
};

export default MoviesBanner;
