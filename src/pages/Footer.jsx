import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">GD SERVICES</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for comprehensive financial solutions and services.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xl">f</span>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xl">𝕏</span>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xl">in</span>
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button 
                  className="hover:text-white transition-colors"
                  onClick={() => handleNavigation('/banking')}
                >
                  Banking
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-white transition-colors"
                  onClick={() => handleNavigation('/insurance')}
                >
                  Insurance
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-white transition-colors"
                  onClick={() => handleNavigation('/education')}
                >
                  Education
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button className="hover:text-white transition-colors">About Us</button></li>
              <li><button className="hover:text-white transition-colors">Careers</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button className="hover:text-white transition-colors">Help Center</button></li>
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          © 2024 FinanceCare. All rights reserved | Powered by Readdy
        </div>
      </div>
    </footer>
  );
};

export default Footer;