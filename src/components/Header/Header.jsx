import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>react movies</h1>
      <p>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
