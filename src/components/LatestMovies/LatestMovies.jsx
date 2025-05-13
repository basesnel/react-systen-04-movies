import { TOTAL_PAGES } from "../../constants/constants";
import HiddenTitle from "../HiddenTitle/HiddenTitle";
import BannersList from "../BannersList/BannersList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import useFilters from "../../helpers/hooks/useFilters";
import useFetch from "../../helpers/hooks/useFetch";
import { getNowPlayingMovies } from "../../api/apiMovies";

import styles from "./styles.module.css";

const LatestMovies = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    query: "",
    with_genres: null,
  });

  const params = { page: filters.page };
  const { data, isLoading } = useFetch(getNowPlayingMovies, params);

  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      changeFilter("page", filters.page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      changeFilter("page", filters.page - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page", pageNumber);
  };

  return (
    <section className={styles.section}>
      <HiddenTitle title="latest popular movies" />
      <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      >
        <BannersList banners={data && data.results} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default LatestMovies;
