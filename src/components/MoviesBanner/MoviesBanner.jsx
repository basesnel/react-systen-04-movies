import formatTimeDiff from "../../helpers/formatTimeDiff";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  const nowTime =
    "Fri Apr 25 2025 05:00:00 GMT+0300 (Eastern European Summer Time)";
  const now = new Date(nowTime);

  const threeYearsAgo = "2022-04-25";
  const twoYearsAgo = "2023-04-25";
  const oneYearAndMonths = "2023-06-20";
  const oneYearAndMonth = "2024-03-20";
  const oneYear = "2024-04-20";
  const months = "2024-05-30";
  const monthAndDays = "2025-03-23";
  const month = "2025-03-26";
  const weeks = "2025-03-27";
  const weekAndDays = "2025-04-16";
  const days = "2025-04-20";
  const dayAndHours = "2025-04-24";
  const hours = "2025-04-24 03:00:00";
  const hourAndMinutes = "2025-04-25 02:00:00";
  const minuteAndSeconds = "2025-04-25 04:59:00";
  const seconds = "2025-04-25 04:59:59";

  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {`Release: ${item.release_date} (${formatTimeDiff(
          item.release_date
        )}) | ${item.vote_average}`}
      </p>
      <p>{`${threeYearsAgo} (${formatTimeDiff(threeYearsAgo)})`}</p>
      <p>{`${twoYearsAgo} (${formatTimeDiff(twoYearsAgo)})`}</p>
      <p>{`${oneYearAndMonths} (${formatTimeDiff(oneYearAndMonths)})`}</p>
      <p>{`${oneYearAndMonth} (${formatTimeDiff(oneYearAndMonth)})`}</p>
      <p>{`${oneYear} (${formatTimeDiff(oneYear)})`}</p>
      <p>{`${months} (${formatTimeDiff(months)})`}</p>
      <p>{`${monthAndDays} (${formatTimeDiff(monthAndDays)})`}</p>
      <p>{`${month} (${formatTimeDiff(month)})`}</p>
      <p>{`${weeks} (${formatTimeDiff(weeks)})`}</p>
      <p>{`${weekAndDays} (${formatTimeDiff(weekAndDays)})`}</p>
      <p>{`${days} (${formatTimeDiff(days)})`}</p>
      <p>{`${dayAndHours} (${formatTimeDiff(dayAndHours, now)})`}</p>
      <p>{`${hours} (${formatTimeDiff(hours, now)})`}</p>
      <p>{`${hourAndMinutes} (${formatTimeDiff(hourAndMinutes, now)})`}</p>
      <p>{`${minuteAndSeconds} (${formatTimeDiff(minuteAndSeconds, now)})`}</p>
      <p>{`${seconds} (${formatTimeDiff(seconds, now)})`}</p>
    </div>
  );
};

export default MoviesBanner;
