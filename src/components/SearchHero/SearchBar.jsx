
import React, { useState } from 'react';

import upArrow from '../assets_comp/up-arrow.png'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to track the input value

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update the query state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (query.trim().length > 0) {
      onSearch(query); // Send query to parent component
    }
  };

  return (
    <section className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="relative w-full bg-white border border-gray-300 shadow-md rounded-2xl">
          {/* Textarea Input Field */}
          <textarea
            name="search"
            placeholder="How can Yadigar help you today?"
            value={query}
            onChange={handleInputChange}
            className="w-full h-32 px-8 pt-4 text-md text-gray-600 placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-left align-text-top resize-none"
          />
          {/* Submit Button */}
          {query.trim().length > 0 && ( // Conditionally render the submit button
            <button
              type="submit"
              className="absolute right-3 top-7 transform -translate-y-1/2 "
            >
              <div className='flex items-center justify-center h-6 w-6 py-1 px-1 rounded-lg bg-amber-600 hover:bg-amber-400'>
                <img src={upArrow} alt="up-arrow"/>
              </div>
              
            </button>
          )}
        </div>
      </form>

      {/* Centered Hello World Div */}
      <div className="flex justify-center items-center w-1/2 h-16 bg-red-400 rounded-b-lg">
        <p className="text-white font-bold">Hello World</p>
      </div>
    </section>
  );
};

export default SearchBar; // Export the component
