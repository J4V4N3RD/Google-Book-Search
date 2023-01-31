import { useState, useEffect } from "react";
import { fetchBooks } from "../../services/FetchBooks.js";
import Search from "../../components/Search/Search.jsx";
import BooksCard from "../../components/BooksCard/BooksCard";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("no data");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const Wrapper = async () => {
      setLoading(true);
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
      <Search
        setQuery={setQuery}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <BooksCard books={books} loading={loading} />
    </>
  );
};

export default BookDisplay;
