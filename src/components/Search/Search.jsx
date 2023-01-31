import styles from "./Search.module.scss";

const Search = ({ setQuery, searchValue, setSearchValue }) => (
  <div className={styles.Search}>
    <input
      placeholder="Search for a book"
      className={styles.Search__Input}
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />

    <button
      onClick={() => {
        setQuery(searchValue);
      }}
      className={styles.Search__Button}
    >
      Search
    </button>
  </div>
);

export default Search;
