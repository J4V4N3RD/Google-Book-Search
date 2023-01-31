import styles from "./BooksCard.module.scss";

const BooksCard = ({ books, loading }) => (
  <div className={styles.Books}>
    {loading ? (
      <p>No Books to display</p>
    ) : (
      books.map((book, index) => (
        <>
          <a href={book.Link} target="_blank" className={styles.Books__Card}>
            <div key={index} className={styles.Books__Card}>
              <h3 className={styles.Books__Card__Title}>{book.Title}</h3>
              <p>{book.Author}</p>
              <img
                src={book.ImageLink}
                alt={book.Title}
                className={styles.Books__Card__Img}
              />
              <p>{book.Description}</p>
            </div>
          </a>
        </>
      ))
    )}
  </div>
);

export default BooksCard;
