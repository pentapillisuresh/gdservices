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
            <h1 className="text-4xl md:text-6xl lg:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Comprehensive Loan Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
              Unlock your dreams with our tailored loan solutions featuring competitive rates, 
              flexible terms, and personalized service for home ownership, business growth, and vehicle financing.
            </p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Expert Loan Solutions</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of loan products designed to meet your specific financial needs 
            with competitive interest rates, flexible repayment options, and expert guidance every step of the way.
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Home Loans */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Home Loans</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Make your dream home a reality with our comprehensive home loan solutions featuring 
              competitive interest rates, flexible tenure options, and quick approval processes.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
              <ul className="space-y-3">
                {[
                  'Interest Rates: Starting from 8.4% p.a.',
                  'Loan Amount: Up to 90% of property value',
                  'Tenure: Up to 30 years',
                  'Processing Fee: 0.5% of loan amount',
                  'Prepayment: No charges after 1 year'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-200 text-sm md:text-base">
                    <svg className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Eligibility:</h4>
              <ul className="space-y-2">
                {[
                  'Age: 21-65 years',
                  'Income: Minimum ₹25,000 per month',
                  'Employment: Salaried or self-employed',
                  'Credit Score: 650 and above'
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm md:text-base">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Commercial Loans */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Commercial Loans</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Fuel your business growth with our commercial loan solutions designed for expansion, 
              equipment purchase, working capital, and commercial property acquisition.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
              <ul className="space-y-3">
                {[
                  'Interest Rates: Starting from 10.5% p.a.',
                  'Loan Amount: Up to ₹5 crores',
                  'Tenure: Up to 15 years',
                  'Moratorium Period: Up to 6 months',
                  'Collateral: Flexible options available'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-200 text-sm md:text-base">
                    <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Business Types:</h4>
              <ul className="space-y-2">
                {[
                  'Startups & SMEs',
                  'Manufacturing Units',
                  'Service Industry',
                  'Retail Businesses',
                  'Professional Services'
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm md:text-base">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vehicle Loans */}
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Vehicle Loans</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Drive home your dream vehicle with our flexible auto loan options for new and used cars, 
              two-wheelers, and commercial vehicles with minimal documentation.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
              <ul className="space-y-3">
                {[
                  'Interest Rates: Starting from 7.9% p.a.',
                  'Loan Amount: Up to 100% of vehicle cost',
                  'Tenure: Up to 7 years',
                  'Processing: 24-hour approval',
                  'Insurance: Comprehensive coverage options'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-200 text-sm md:text-base">
                    <svg className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-lg">Vehicle Types:</h4>
              <ul className="space-y-2">
                {[
                  'New Cars & SUVs',
                  'Pre-owned Vehicles',
                  'Two-Wheelers',
                  'Commercial Vehicles',
                  'Electric Vehicles'
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm md:text-base">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Loan Process Section */}
        <div 
          className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-md rounded-3xl p-6 md:p-12 text-white border border-white/10 shadow-2xl mb-12 md:mb-20"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">Simple Loan Process</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 md:mb-12 text-center leading-relaxed">
            Our streamlined loan application process ensures quick approval and disbursement with minimal documentation 
            and maximum convenience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                desc: 'Fill our simple online application form with basic details'
              },
              {
                step: '02',
                title: 'Documentation',
                desc: 'Submit required documents through our secure portal'
              },
              {
                step: '03',
                title: 'Verification',
                desc: 'Quick verification and credit assessment process'
              },
              {
                step: '04',
                title: 'Disbursement',
                desc: 'Loan amount transferred directly to your account'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={700 + index * 100}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{process.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Loans Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <div data-aos="fade-right" data-aos-delay="800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Loan Solutions?</h3>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: 'Competitive Interest Rates',
                  desc: 'Enjoy some of the most competitive rates in the market with transparent pricing.'
                },
                {
                  title: 'Flexible Repayment',
                  desc: 'Choose repayment options that suit your financial situation and cash flow.'
                },
                {
                  title: 'Quick Processing',
                  desc: 'Experience fast loan approval and disbursement with minimal documentation.'
                },
                {
                  title: 'Expert Guidance',
                  desc: 'Get personalized assistance from our loan specialists throughout the process.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Loan Calculator</h4>
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 block mb-2">Loan Amount (₹)</label>
                <input type="range" min="100000" max="5000000" step="100000" className="w-full" />
                <div className="text-white text-sm mt-1">₹ 5,00,000</div>
              </div>
              <div>
                <label className="text-gray-300 block mb-2">Tenure (Years)</label>
                <input type="range" min="1" max="30" className="w-full" />
                <div className="text-white text-sm mt-1">15 Years</div>
              </div>
              <div>
                <label className="text-gray-300 block mb-2">Interest Rate (%)</label>
                <input type="range" min="5" max="15" step="0.1" className="w-full" />
                <div className="text-white text-sm mt-1">8.4%</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl mt-6">
                <div className="flex justify-between text-white mb-2">
                  <span>Monthly EMI:</span>
                  <span className="font-bold">₹ 12,345</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Total Interest:</span>
                  <span>₹ 5,55,555</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Total Amount:</span>
                  <span>₹ 22,22,222</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Back to Home Button */}
        <div 
          className="text-center mt-12 md:mt-16"
          data-aos="fade-up"
          data-aos-delay="900"
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