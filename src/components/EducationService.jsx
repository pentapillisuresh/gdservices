import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, FileText, Briefcase, Smartphone, Check, ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationService = () => {
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
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url(./images/three.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
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
              Financial <span className="text-blue-400">Education</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
              Comprehensive financial education and planning services to empower your financial decisions 
              and help you achieve long-term success.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                Start Learning Today
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
        {/* Introduction */}
        <div 
          className="text-center mb-12 md:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Financial Education Programs</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering you with the knowledge and tools to make informed financial decisions 
            and build a secure financial future through comprehensive education programs.
          </p>
        </div>

        {/* Education Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Wealth Management Education */}
          <div 
            className="bg-gradient-to-br from-[#1e2d47] to-[#15202e] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Wealth Management</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Master the principles of wealth creation, preservation, and growth through our comprehensive 
              wealth management education programs.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Investment strategies', 'Portfolio management', 'Risk assessment', 'Estate planning', 'Tax optimization', 'Retirement planning'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-200 text-base md:text-lg">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-3 md:mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Planning Education */}
          <div 
            className="bg-gradient-to-br from-[#1e2d47] to-[#15202e] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Financial Planning</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Learn to create comprehensive financial plans that align with your life goals and 
              provide long-term financial security.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Goal setting techniques', 'Budget planning', 'Debt management', 'Savings strategies', 'Investment planning', 'Risk management'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-200 text-base md:text-lg">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-3 md:mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Finance Education */}
          <div 
            className="bg-gradient-to-br from-[#1e2d47] to-[#15202e] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Business Finance</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Essential financial education for entrepreneurs and business professionals to 
              optimize financial performance and drive growth.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Financial statements', 'Cash flow management', 'Business valuation', 'Funding strategies', 'Financial modeling', 'Risk assessment'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-200 text-base md:text-lg">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mr-3 md:mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Finance Education */}
          <div 
            className="bg-gradient-to-br from-[#1e2d47] to-[#15202e] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Digital Finance</h3>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              Master modern digital financial tools and platforms to efficiently manage your 
              finances in today's digital world.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Online banking', 'Digital investing', 'Mobile payments', 'Financial apps', 'Security best practices', 'Automation tools'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-200 text-base md:text-lg">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-3 md:mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learning Process Section */}
        <div 
          className="text-center mb-12 md:mb-20"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Our Learning Journey</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A structured approach to financial education that ensures comprehensive understanding 
            and practical application of financial concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {[
            { 
              num: '1', 
              title: 'Assessment', 
              desc: 'Evaluate your current financial knowledge and identify learning objectives.',
              color: 'from-blue-500 to-blue-600'
            },
            { 
              num: '2', 
              title: 'Learning', 
              desc: 'Engage with interactive courses and practical financial concepts.',
              color: 'from-green-500 to-green-600'
            },
            { 
              num: '3', 
              title: 'Application', 
              desc: 'Apply learned concepts to real-world financial scenarios and cases.',
              color: 'from-purple-500 to-purple-600'
            },
            { 
              num: '4', 
              title: 'Mastery', 
              desc: 'Achieve financial literacy and confidence in managing your finances.',
              color: 'from-orange-500 to-orange-600'
            }
          ].map((step, idx) => (
            <div 
              key={idx} 
              className="text-center group"
              data-aos="zoom-in"
              data-aos-delay={600 + idx * 100}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Expert Guidance Section */}
        <div 
          className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-6 md:p-12 text-white border border-white/10 shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Learn from Financial Experts</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Our team of certified financial educators and industry professionals brings decades 
                of experience to help you build financial literacy and confidence.
              </p>
              <ul className="space-y-4">
                {['Certified Financial Educators', 'Industry Practitioners', 'Personalized Learning Paths', 'Continuous Support'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-blue-100 text-lg">
                    <Check className="w-5 h-5 text-white mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div 
                className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Interactive Learning</h3>
                    <p className="text-blue-100">Engage with real-world financial scenarios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Back to Home Button */}
        <div 
          className="text-center mt-12 md:mt-16"
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

export default EducationService;