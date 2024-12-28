import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  // Form gönderme işlevi
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search'); // Formdan sorguyu al
    onSearch(query); // Arama sorgusunu üst bileşene ilet
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder="Start typing your query..."
          className="w-full h-16 px-6 pr-12 text-lg bg-white border-2 border-gray-200 rounded-xl shadow-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
