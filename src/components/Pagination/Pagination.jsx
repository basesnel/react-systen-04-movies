import styles from "./styles.module.css";

const Pagination = ({ totalPages }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow}>{"<"}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button key={index} className={styles.pageNumber}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <button className={styles.arrow}>{">"}</button>
    </div>
  );
};

export default Pagination;
