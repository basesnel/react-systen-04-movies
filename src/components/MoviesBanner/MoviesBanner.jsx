import formatTimeDiff from "../../helpers/formatTimeDiff";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const MoviesBanner = ({ item }) => {
  const nowTime =
    "Fri Apr 25 2025 00:00:00 GMT+0300 (Eastern European Summer Time)";
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
  const weekAndDays = "2025-05-08";
  const days = "2025-05-03";
  const zero = "2025-04-25 05:00:00";
  const dayAndHours = "2025-04-26 06:00:00";
  const hours = "2025-04-25 10:00:00";
  const hourAndMinutes = "2025-04-25 06:02:10";
  const minutes = "2025-04-25 04:01:20";
  const minuteAndSeconds = "2025-04-25 05:01:21";
  const seconds = "2025-04-25 05:00:11";

  return (
    <div className={styles.banner}>
      <Image image={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {`Release: ${item.release_date} (${formatTimeDiff(
          item.release_date
        )}) | ${item.vote_average}`}
      </p>
      <p>{`${threeYearsAgo} (${formatTimeDiff(threeYearsAgo, now)})`}</p>
      <p>{`${twoYearsAgo} (${formatTimeDiff(twoYearsAgo, now)})`}</p>
      <p>{`${oneYearAndMonths} (${formatTimeDiff(oneYearAndMonths, now)})`}</p>
      <p>{`${oneYearAndMonth} (${formatTimeDiff(oneYearAndMonth, now)})`}</p>
      <p>{`${oneYear} (${formatTimeDiff(oneYear, now)})`}</p>
      <p>{`${months} (${formatTimeDiff(months, now)})`}</p>
      <p>{`${monthAndDays} (${formatTimeDiff(monthAndDays, now)})`}</p>
      <p>{`${month} (${formatTimeDiff(month, now)})`}</p>
      <p>{`${weeks} (${formatTimeDiff(weeks, now)})`}</p>
      <p>{`${weekAndDays} (${formatTimeDiff(weekAndDays, now)})`}</p>
      <p>{`${days} (${formatTimeDiff(days, now)})`}</p>
      <p>{`${zero} (${formatTimeDiff(zero, now)})`}</p>
      <p>{`${dayAndHours} (${formatTimeDiff(dayAndHours, now)})`}</p>
      <p>{`${hours} (${formatTimeDiff(hours, now)})`}</p>
      <p>{`${hourAndMinutes} (${formatTimeDiff(hourAndMinutes, now)})`}</p>
      <p>{`${minutes} (${formatTimeDiff(minutes, now)})`}</p>
      <p>{`${minuteAndSeconds} (${formatTimeDiff(minuteAndSeconds, now)})`}</p>
      <p>{`${seconds} (${formatTimeDiff(seconds, now)})`}</p>
    </div>
  );
};

export default MoviesBanner;
