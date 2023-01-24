import styles from "./BookDisplay.module.scss";
import BooksApi from "../BooksApi/BooksApi";
import SearchBar from "../SearchBar/SearchBar";
const BookDisplay = () => {
  return (
    <>
      {/* <SearchBar /> */}
      <BooksApi />
    </>
  );
};

export default BookDisplay;
