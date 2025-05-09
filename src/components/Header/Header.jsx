import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>react movies</h1>
      <p className={styles.datae}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
