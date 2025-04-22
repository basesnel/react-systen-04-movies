import styles from "./styles.module.css";

const Pagination = ({ totalPages }) => {
  return (
    <div>
      <button className={styles.button}>{"<"}</button>
      <div>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button key={index} className={styles.button}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <button className={styles.button}>{">"}</button>
    </div>
  );
};

export default Pagination;
