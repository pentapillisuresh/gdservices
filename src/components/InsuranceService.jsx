import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, FileText, Car, Home, Shield, Info, Headphones, Check, ArrowLeft, Flame, Anchor, Scale } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InsurancePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2744] via-[#0f1829] to-[#0a0f1c]">
      {/* Enhanced Header Section with Background Image */}
      <div 
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url(./images/two.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBackToHome}
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Comprehensive <span className="text-blue-400">Insurance</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
              Protecting your life, assets, and future with two main categories of insurance coverage: 
              Life Insurance for personal protection and General Insurance for asset and liability coverage.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                Get Quote Today
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                View All Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
        {/* Insurance Categories Introduction */}
        <div 
          className="text-center mb-16 md:mb-24"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Two Main Insurance Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive protection through two primary insurance categories: 
            <span className="text-blue-400 font-semibold"> Life Insurance</span> for personal financial security and 
            <span className="text-green-400 font-semibold"> General Insurance</span> for asset and liability protection.
          </p>
        </div>

        {/* Life Insurance Section */}
        <div className="mb-20 md:mb-28">
          <div 
            className="text-center mb-12 md:mb-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-4">
              🛡️ Life Insurance
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Financial protection for you and your loved ones with various investment and savings options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Term Insurance */}
            <div 
              className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Term Insurance</h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pure protection plan that pays a sum assured if the insured person passes away during the policy term. Affordable premium for high coverage.
              </p>
              <ul className="space-y-3">
                {['Pure risk coverage', 'Affordable premiums', 'High sum assured', 'Fixed policy term', 'Death benefit only', 'No maturity value'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-sm">
                    <Check className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Savings Insurance */}
            <div 
              className="bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Savings Insurance</h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Traditional savings + insurance combination plans like endowment and money-back policies with guaranteed returns and life coverage.
              </p>
              <ul className="space-y-3">
                {['Savings + protection', 'Guaranteed returns', 'Regular payouts', 'Maturity benefits', 'Bonus additions', 'Loan facility'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ULIP */}
            <div 
              className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">ULIP</h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Unit Linked Insurance Plans combining insurance protection with market-linked investments. Flexibility to choose investment funds.
              </p>
              <ul className="space-y-3">
                {['Insurance + investment', 'Market-linked returns', 'Fund options', 'Partial withdrawals', 'Top-up facility', 'Transparency'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-sm">
                    <Check className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* General Insurance Section */}
        <div className="mb-20 md:mb-28">
          <div 
            className="text-center mb-12 md:mb-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
              🏢 General Insurance
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage for your assets, health, vehicles, and liabilities against various risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Health Insurance */}
            <div 
              className="bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-red-500/30 hover:border-red-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Health Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Comprehensive medical expense coverage for hospitalization, treatments, and healthcare needs.
              </p>
            </div>

            {/* Motor Insurance */}
            <div 
              className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Motor Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Coverage for cars, bikes, and commercial vehicles against accidents, theft, and damages.
              </p>
            </div>

            {/* Fire Insurance */}
            <div 
              className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Fire Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Protection against fire-related damages to property, inventory, and business assets.
              </p>
            </div>

            {/* Engineering Insurance */}
            <div 
              className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Engineering Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Coverage for machinery, equipment, construction risks, and engineering projects.
              </p>
            </div>

            {/* Marine Insurance */}
            <div 
              className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Marine Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Protection for goods transported by ship, air, or road against damage and loss.
              </p>
            </div>

            {/* Liability Insurance */}
            <div 
              className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Liability Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Coverage for legal liabilities including public, product, and employer liability.
              </p>
            </div>

            {/* Home Insurance */}
            <div 
              className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Home Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Protection for homes and household items against theft, natural calamities, and damages.
              </p>
            </div>

            {/* Office Insurance */}
            <div 
              className="bg-gradient-to-br from-violet-900/50 to-violet-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-3">Office Insurance</h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                Coverage for office buildings, equipment, business property, and commercial assets.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div 
          className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-6 md:p-12 text-white border border-white/10 shadow-2xl mb-12 md:mb-20"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Choose Our Insurance</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                With decades of experience in both life and general insurance, we provide comprehensive 
                protection solutions backed by exceptional service and competitive rates.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: 'Comprehensive Coverage', desc: 'Complete protection across life and general insurance categories' },
                  { icon: Info, text: 'Expert Guidance', desc: 'Professional advice to choose the right insurance products for your needs' },
                  { icon: Headphones, text: '24/7 Claims Support', desc: 'Round-the-clock assistance for quick claim settlements' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-blue-100">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-semibold text-white block mb-1">{item.text}</span>
                      <span className="text-blue-100 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div 
                className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6)), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Trusted Protection</h3>
                    <p className="text-blue-100">Serving millions with reliable insurance solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Back to Home Button */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <button
            onClick={handleBackToHome}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;