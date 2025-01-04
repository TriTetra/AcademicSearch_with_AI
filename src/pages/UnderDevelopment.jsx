import React from 'react';
import { Construction } from 'lucide-react'; // Optional: Replace with your preferred icon library.

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      {/* Icon or Image */}
      <Construction className="h-16 w-16 text-amber-500 mb-6" />
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">We're Building Something Amazing!</h1>
      
      {/* Message */}
      <p className="text-lg text-gray-600 mb-8">
        This page is currently under development. Please check back soon for updates!
      </p>
      
      {/* Optional Progress Bar */}
      <div className="w-3/4 max-w-md bg-gray-200 rounded-full h-4">
        <div className="bg-amber-500 h-4 rounded-full animate-pulse" style={{ width: '50%' }}></div>
      </div>
      
      {/* Contact Link or Back to Home */}
      <a
        href="/"
        className="mt-8 px-6 py-3 text-white bg-amber-500 hover:bg-amber-600 rounded-md shadow-md transition"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default UnderDevelopment;
