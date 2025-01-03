
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import upArrow from '../assets_comp/up-arrow.png'
import cameraPNG from '../assets_comp/camera.png'
import attachPNG from '../assets_comp/attach-file.png'

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState(''); // State to track the input value
  const [isButtonActive, setIsButtonActive] = useState(false); // Butonun aktiflik durumu

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsButtonActive(e.target.value.trim().length > 0); // Metin varsa butonu aktif yap
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
            onKeyDown={(e) => {
              // Enter tuşu basıldığında
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Yeni satır eklemeyi engelle
                document.querySelector("button[type='submit']").click(); // Submit butonuna tıkla
              }
            }}
            className="w-full h-32 px-8 pt-4 text-md text-gray-600 placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-left align-text-top resize-none"
          />

          {/* Submit Button */}
          {isButtonActive && ( // Conditionally render the submit button
          <Link to='/login'>
            <button
              type="submit"
              className="absolute right-3 top-7 transform -translate-y-1/2"
            >
              <div
                className="flex items-center justify-center h-6 w-6 py-1 px-1 rounded-lg bg-amber-600 hover:bg-amber-400 transition-transform duration-500 ease-out animate-fadeIn"
              >
                <img
                  src={upArrow} // Replace with your actual image path
                  alt="up-arrow"
                  className="object-contain"
                />
              </div>
            </button>
          </Link>
          )}
        </div>
      </form>

      {/* Centered Hello World Div */}
      <div className="flex flex-col justify-center items-center w-1/2 h-24 bg-amber-700 rounded-b-2xl border-2 border-gray-300 shadow-lg">

        <div className="flex flex-row items-center justify-between w-full px-5">

          {/* Yazıyı sola hizala */}
          <div className="text-xs text-white font-medium">
            Collaborate with Yadigar using documents, images, and more
          </div>

          {/* Resimleri sağa hizala */}
          <div className="flex items-center gap-2">
            {/* gap-4 resimlerin arasındaki boşluğu ayarlar */}
            <Link to='/'>
              <img src={cameraPNG} alt="camera" className="h-7 w-7 hover:bg-gray-500 py-1 px-1 rounded-lg" />
            </Link>

            <Link to='/'>
              <img src={attachPNG} alt="attach" className="h-7 w-7 hover:bg-gray-500 py-1 px-1 rounded-lg" />
            </Link>
          </div>

        </div>


        {/* Separate column item */}
        <div className='flex flex-row items-center justify-between w-full px-7 pt-3 font-light'>

          <Link to='/'><div className='border text-white font-light text-xs border-gray-300 hover:bg-amber-100 hover:text-amber-700 hover:border-amber-700 rounded-2xl px-4 py-2' >Example search text 1</div></Link>
          <Link to='/'><div className='border text-white font-light text-xs border-gray-300 hover:bg-amber-100 hover:text-amber-700 hover:border-amber-700 rounded-2xl px-4 py-2'>Example search text 2</div></Link>
          <Link to='/'><div className='border text-white font-light text-xs border-gray-300 hover:bg-amber-100 hover:text-amber-700 hover:border-amber-700 rounded-2xl px-4 py-2'>Example search text 3</div></Link>
          
        </div>
      </div>

    </section>
  );
};

export default SearchBar; // Export the component
