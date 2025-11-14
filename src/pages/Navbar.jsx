import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup'; // Adjust the path as needed

const Navbar = () => {
  const navigate = useNavigate();
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const openQuotePopup = () => {
    setIsQuotePopupOpen(true);
  };

  const closeQuotePopup = () => {
    setIsQuotePopupOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-white cursor-pointer hover:text-blue-300 transition-colors"
            onClick={() => handleNavigation('/first')}
          >
            GD SERVICES
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button 
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => handleNavigation('/home')}
            >
              Home
            </button>
            <button 
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => handleNavigation('/banking')}
            >
              Loans
            </button>
            <button 
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => handleNavigation('/insurance')}
            >
              Insurance
            </button>
            <button 
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => handleNavigation('/education')}
            >
              IT services
            </button>
            <button 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
              onClick={openQuotePopup}
            >
              <i className="ri-share-line"></i>
              Share & Earn
            </button>
          </div>
        </div>
      </nav>

      {/* Quote Popup */}
      <QuotePopup 
        isOpen={isQuotePopupOpen} 
        onClose={closeQuotePopup} 
      />
    </>
  );
};

export default Navbar;