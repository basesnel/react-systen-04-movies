import styles from "./styles.module.css";

const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        placeholder="Find movie..."
      />
    </div>
  );
};

export default Search;
