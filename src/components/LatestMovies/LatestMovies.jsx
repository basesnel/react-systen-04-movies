import HiddenTitle from "../HiddenTitle/HiddenTitle";
import BannersList from "../BannersList/BannersList";
import useFetch from "../../helpers/hooks/useFetch";
import { getNowPlayingMovies } from "../../api/apiMovies";

import styles from "./styles.module.css";

const LatestMovies = () => {
  const params = { page: 1 };
  const { data, isLoading } = useFetch(getNowPlayingMovies, params);
  return (
    <section className={styles.section}>
      <HiddenTitle title="latest popular movies" />
      <BannersList banners={data && data.results} isLoading={isLoading} />
    </section>
  );
};

export default LatestMovies;
