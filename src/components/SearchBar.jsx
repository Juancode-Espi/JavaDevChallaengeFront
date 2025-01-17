import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar ID..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;