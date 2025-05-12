import styles from "./styles.module.css";

const HiddenTitle = ({ title }) => {
  return <h2 className={styles.hidden}>{title}</h2>;
};

export default HiddenTitle;
