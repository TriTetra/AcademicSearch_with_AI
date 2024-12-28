import React from 'react';
import SearchBar from '../components/SearchHero/SearchBar'; // SearchBar bileşeniyle uyumlu

function SearchHomePage() {
  // Arama işlevi
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Research Insights
          </h1>
          <p className="text-lg text-gray-600">
            Access millions of research papers, articles, and studies in one place.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Popular Searches */}
        <div className="mt-8 flex items-center space-x-4">
          <span className="text-sm text-gray-500">Popular searches:</span>
          {['AI Ethics', 'Climate Change', 'Quantum Computing'].map((term) => (
            <button
              key={term}
              className="px-4 py-2 text-sm bg-white text-gray-600 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
              onClick={() => handleSearch(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SearchHomePage;
