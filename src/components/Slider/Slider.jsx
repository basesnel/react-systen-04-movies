import styles from "./styles.module.css";

const Slider = ({ children }) => {
  return (
    <div className={styles.slider}>
      <button className={styles.arrow}>{`<`}</button>
      {children}
      <button className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;
