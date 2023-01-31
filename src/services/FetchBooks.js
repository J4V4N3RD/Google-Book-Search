export const fetchBooks = async (searchValue) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
  );
  const data = await response.json();
  const books = data.items.map((item) => {
    return {
      Title: item.volumeInfo?.title,
      Author: item.volumeInfo?.authors,
      Description: item.volumeInfo?.description.slice(0, 300) + "...",
      ImageLink: item.volumeInfo.imageLinks?.thumbnail,
      Link: item.volumeInfo?.previewLink,
    };
  });

  return books;
};
