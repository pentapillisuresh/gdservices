import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => handleNavigation('/first')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;