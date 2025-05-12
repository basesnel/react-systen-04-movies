import BannersList from "../BannersList/BannersList";

import styles from "./styles.module.css";

const LatestMovies = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>latest popular movies</h2>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestMovies;
