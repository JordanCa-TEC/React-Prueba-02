import React from 'react';

const FilteredList = ({ books, searchText }) => {
  const filteredBooks = books.filter(book =>
    book.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ul className="book-list">
      {filteredBooks.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </ul>
  );
};

export default FilteredList;
