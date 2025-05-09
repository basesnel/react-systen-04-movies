import withSkeleton from "../../helpers/hocs/withSkeleton";
import MoviesBanner from "../MoviesBanner/MoviesBanner";

import styles from "./styles.module.css";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <MoviesBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 20, "row");

export default BannersListWithSkeleton;
