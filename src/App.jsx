import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BookDisplay from "./components/BookDisplay/BookDisplay";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksApi from "./components/BooksApi/BooksApi";

function App() {
  return (
    <>
      <Header />

      {/* <SearchBar /> */}

      <BookDisplay />
    </>
  );
}

export default App;
