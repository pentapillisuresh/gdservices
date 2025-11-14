// components/QuoteButton.jsx
import React, { useState } from 'react';
import QuotePopup from './QuotePopup';

const QuoteButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Floating Quote Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Get Quote"
      >
        <i className="ri-chat-quote-line text-2xl"></i>
      </button>
      
      <QuotePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default QuoteButton;