import { useState, useEffect } from "react";
import { fetchBooks } from "./FetchBooks.js";
import styles from "./BooksApi.module.scss";

const BooksApi = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const Wrapper = async () => {
      setLoading(true);
      setFetching(false);
      try {
        const books = await fetchBooks(searchValue);
        setBooks(books);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    if (fetching) Wrapper();
  }, [fetching]);

  return (
    <>
      <div className={styles.Search}>
        <input
          placeholder="Search for a book"
          className={styles.Input}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <button
          onClick={() => {
            setSearchValue(searchValue);
            setFetching(true);
          }}
          className={styles.Button}
        >
          Search
        </button>
      </div>
      <div className={styles.Books}>
        {loading ? (
          <p>No Books to display</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className={styles.Card}>
              <h3 className={styles.Title}>{book.Title}</h3>
              <p>{book.Author}</p>
              <img
                src={book.ImageLink}
                alt={book.ImageLin}
                className={styles.Img}
              />
              <p>{book.Description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BooksApi;
