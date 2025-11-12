import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroTextRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(heroImageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      '-=0.8'
    )
    .fromTo('.service-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
      '-=0.5'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-item')) {
              gsap.fromTo(entry.target,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6 }
              );
            }
            if (entry.target.classList.contains('testimonial-card')) {
              gsap.fromTo(entry.target,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.stat-item, .testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    const card = document.querySelector(`[data-service="${service}"]`);
    gsap.to(card, {
      scale: 0.95,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        navigate(`/${service}`);
      }
    });
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroTextRef}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Financial<br />
              <span className="text-blue-400">Future Starts</span><br />
              <span className="text-blue-400">Here</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Comprehensive financial solutions designed to secure your future and accelerate your growth with cutting-edge technology and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
                onClick={() => handleNavigation('/banking')}
              >
                Explore Banking
              </button>
              <button 
                className="border-2 border-slate-600 text-white hover:border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                onClick={() => handleNavigation('/first')}
              >
                View Solutions
              </button>
            </div>
          </div>
          <div ref={heroImageRef} className="relative">
            <img src="./images/banner.jpg" alt="Financial Growth" className="w-full rounded-3xl shadow-2xl border border-slate-700" />
          </div>
        </div>
        <div className="text-center mt-12">
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto animate-bounce" />
        </div>
      </section>

      <section ref={servicesRef} className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Core Services
            </h2>
            <p 
              className="text-xl text-slate-400 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Discover comprehensive financial solutions designed to meet your unique needs and help you achieve your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Banking Service */}
            <div
              data-service="banking"
              className="service-card group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer border border-slate-700 hover:border-blue-500"
              onClick={() => handleServiceClick('banking')}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src="./images/image1.jpg"
                    alt="Banking Services"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Banking</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Comprehensive banking solutions including personal accounts, business banking, loans, and investment services.
              </p>
              <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors duration-300 group">
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Insurance Service */}
            <div
              data-service="insurance"
              className="service-card group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer border border-slate-700 hover:border-blue-500"
              onClick={() => handleServiceClick('insurance')}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src="./images/image2.jpg"
                    alt="Insurance Services"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Insurance</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Protect what matters most with our comprehensive insurance coverage for life, health, property, and business.
              </p>
              <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors duration-300 group">
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Education Service */}
            <div
              data-service="education"
              className="service-card group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer border border-slate-700 hover:border-blue-500"
              onClick={() => handleServiceClick('education')}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src="./images/image3.jpg"
                    alt="Education Services"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Tailored financial education and planning services to help you achieve your personal and business goals.
              </p>
              <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors duration-300 group">
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          

        
        </div>
      </section>

      {/* Why Choose Us Section */}
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Why Choose Us
      </h2>
      <p 
        className="text-xl text-slate-300 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        Experience the difference with our commitment to excellence, innovation, and customer satisfaction.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Secure & Protected */}
      <div 
        className="group text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25">
            <i className="ri-shield-check-line text-white text-3xl"></i>
          </div>
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Secure & Protected</h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          Bank-level security with 256-bit encryption and multi-factor authentication.
        </p>
      </div>

      {/* 24/7 Support */}
      <div 
        className="group text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/25">
            <i className="ri-customer-service-2-line text-white text-3xl"></i>
          </div>
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">24/7 Support</h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          Round-the-clock customer support to assist you whenever you need help.
        </p>
      </div>

      {/* Mobile First */}
      <div 
        className="group text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
            <i className="ri-smartphone-line text-white text-3xl"></i>
          </div>
          <div className="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Mobile First</h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          Access all services seamlessly across desktop, tablet, and mobile devices.
        </p>
      </div>

      {/* Award Winning */}
      <div 
        className="group text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/25">
            <i className="ri-award-line text-white text-3xl"></i>
          </div>
          <div className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Award Winning</h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          Recognized industry leader with multiple awards for excellence and innovation.
        </p>
      </div>
    </div>

    {/* Additional Stats Section */}
    <div 
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
    >
      <div className="group">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
        <div className="text-slate-400 text-lg">Happy Clients</div>
      </div>
      <div className="group">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
        <div className="text-slate-400 text-lg">Years Experience</div>
      </div>
      <div className="group">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
        <div className="text-slate-400 text-lg">Customer Support</div>
      </div>
      <div className="group">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
        <div className="text-slate-400 text-lg">Satisfaction Rate</div>
      </div>
    </div>
  </div>
</section>

 

      {/* Final CTA Section */}
{/* Final CTA Section */}
<section 
  ref={ctaRef} 
  className="py-20 px-6 relative overflow-hidden"
  style={{
    backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(15, 23, 42, 0.9)), url(./images/bgimage.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    translate: 'none',
    rotate: 'none',
    scale: 'none',
    transform: 'translate(0px, 0px)',
    opacity: 1
  }}
>
  {/* Animated Background Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  
  {/* Main Content */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <div 
      className=""
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        Ready to Transform Your Financial Future?
      </h2>
      <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
        Join thousands of satisfied customers who trust <span className="font-semibold text-white">FinanceCore</span> for their banking, insurance, and financial solution needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button 
          className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl min-w-[200px]"
          onClick={() => handleNavigation('/first')}
        >
          Get Started Today
        </button>
        <button 
          className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[200px]"
          onClick={() => handleNavigation('/home')}
        >
          Schedule Consultation
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;