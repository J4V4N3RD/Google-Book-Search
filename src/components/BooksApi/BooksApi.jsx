import { useState, useEffect } from "react";
import { fetchBooks } from "./FetchBooks.js";
import styles from "./BooksApi.module.scss";

const BooksApi = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("No data");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const Wrapper = async () => {
      setLoading(true);
      // setFetching(false);
      console.log(query);
      try {
        const books = await fetchBooks(query);
        setBooks(books);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    Wrapper();
  }, [query]);

  return (
    <>
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
      <div className={styles.Books}>
        {loading ? (
          <p>No Books to display</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className={styles.Books__Card}>
              <a
                href={book.Link}
                target="_blank"
                className={styles.Books__Card}
              >
                Deployed
                <h3 className={styles.Books__Card__Title}>{book.Title}</h3>
                <p>{book.Author}</p>
                <img
                  src={book.ImageLink}
                  alt={book.ImageLin}
                  className={styles.Books__Card__Img}
                />
                <p>{book.Description}</p>
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BooksApi;
