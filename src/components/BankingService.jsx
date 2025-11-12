import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BankingService = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Enhanced Header Section */}
      <div 
        className="relative text-white py-24 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url(./images/one.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBackToHome}
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
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
              Banking Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
              Experience modern banking with personalized service, competitive rates,
              and innovative digital solutions designed for your financial success.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                Open Account Today
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
        {/* Introduction */}
        <div 
          className="text-center mb-12 md:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Comprehensive Banking Services</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our complete suite of banking solutions designed to meet all your financial needs 
            with exceptional service, competitive rates, and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Personal Banking */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Personal Banking</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Comprehensive personal banking solutions including checking, savings, investment accounts, 
              and wealth management services tailored to your individual needs.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Free checking accounts', 'High-yield savings', 'Mobile banking', 'ATM network access', 'Personal financial planning', 'Wealth management'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200 text-base md:text-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Banking */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 group"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Business Banking</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Tailored banking solutions for businesses of all sizes with competitive rates, 
              dedicated support, and comprehensive financial tools for growth and success.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Business checking accounts', 'Merchant services', 'Payroll solutions', 'Business loans', 'Commercial real estate', 'Cash management'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200 text-base md:text-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Loans & Credit */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Loans & Credit</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Flexible lending options including personal loans, mortgages, and lines of credit 
              designed to help you achieve your financial goals with competitive rates.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Personal loans', 'Home mortgages', 'Auto loans', 'Credit cards', 'Line of credit', 'Debt consolidation'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200 text-base md:text-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Services */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Investment Services</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Professional investment management and wealth building strategies with 
              personalized guidance to secure your financial future and maximize returns.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Portfolio management', 'Retirement planning', 'Financial advisory', 'Market research', 'Wealth preservation', 'Tax planning'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200 text-base md:text-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Digital Banking Excellence Section */}
        <div 
          className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-6 md:p-12 text-white border border-white/10 shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">Digital Banking Excellence</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 md:mb-12 text-center leading-relaxed">
            Experience the future of banking with our cutting-edge digital platform that puts you 
            in complete control of your finances 24/7, anywhere in the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Mobile Banking App',
                desc: 'Bank anywhere, anytime with our intuitive mobile app featuring advanced financial tools',
                icon: '📱'
              },
              {
                title: 'Advanced Security',
                desc: 'Enterprise-grade security with biometric authentication and real-time fraud monitoring',
                icon: '🔒'
              },
              {
                title: '24/7 Access',
                desc: 'Round-the-clock access to your accounts, transactions, and financial services',
                icon: '⏰'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={600 + index * 100}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl md:text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Back to Home Button */}
        <div 
          className="text-center mt-12 md:mt-16"
          data-aos="fade-up"
          data-aos-delay="700"
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

export default BankingService;