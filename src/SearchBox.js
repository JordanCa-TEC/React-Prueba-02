import React from 'react';

const SearchBox = ({ setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a book..."
      onChange={handleChange}
      className="search-box"
    />
  );
};

export default SearchBox;
