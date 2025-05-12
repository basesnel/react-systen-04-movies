import HiddenTitle from "../HiddenTitle/HiddenTitle";
import BannersList from "../BannersList/BannersList";

import styles from "./styles.module.css";

const LatestMovies = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <HiddenTitle title="latest popular movies" />
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestMovies;
