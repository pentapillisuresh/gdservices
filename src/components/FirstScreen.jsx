import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstScreen = () => {
  const navigate = useNavigate();
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const animateElements = () => {
      const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];

      // Title animation - clean and professional
      if (titleRef.current) {
        titleRef.current.style.opacity = '0';
        titleRef.current.style.transform = 'translate3d(0px, 30px, 0px)';
        
        setTimeout(() => {
          titleRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 200);
      }

      // Subtitle animation
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '0';
        subtitleRef.current.style.transform = 'translate3d(0px, 20px, 0px)';
        
        setTimeout(() => {
          subtitleRef.current.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 400);
      }

      // Circles animation - subtle and elegant
      circles.forEach((circle, index) => {
        if (circle) {
          circle.style.opacity = '0';
          circle.style.transform = 'scale(0.8) translate3d(0px, 20px, 0px)';
          
          setTimeout(() => {
            circle.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            circle.style.opacity = '1';
            circle.style.transform = 'scale(1) translate3d(0px, 0px, 0px)';
          }, 600 + (index * 200));

          // Start subtle floating animation after entrance
          setTimeout(() => {
            startFloatingAnimation(circle, index);
          }, 1500 + (index * 100));
        }
      });

      // Scroll indicator animation
      if (scrollRef.current) {
        scrollRef.current.style.opacity = '0';
        scrollRef.current.style.transform = 'translate3d(-50%, 20px, 0px)';
        
        setTimeout(() => {
          scrollRef.current.style.transition = 'all 0.6s ease-out';
          scrollRef.current.style.opacity = '1';
          scrollRef.current.style.transform = 'translate3d(-50%, 0px, 0px)';
        }, 1200);
      }
    };

    // Subtle floating animation
    const startFloatingAnimation = (circle, index) => {
      const duration = 3000;
      const floatDistance = 8;

      const animate = () => {
        // Float up
        circle.style.transition = `transform ${duration}ms ease-in-out`;
        circle.style.transform = `translate3d(0px, -${floatDistance}px, 0px)`;
        
        setTimeout(() => {
          // Float down
          circle.style.transition = `transform ${duration}ms ease-in-out`;
          circle.style.transform = `translate3d(0px, ${floatDistance}px, 0px)`;
        }, duration);
      };

      animate();
      setInterval(animate, duration * 2);
    };

    animateElements();
  }, []);

  const handleCircleClick = (service) => {
    let circle;
    switch (service) {
      case 'banking':
        circle = circle1Ref.current;
        break;
      case 'insurance':
        circle = circle2Ref.current;
        break;
      case 'education': // Fixed to lowercase for consistency with routes
        circle = circle3Ref.current;
        break;
      default:
        return;
    }

    if (circle) {
      // Clean click animation
      circle.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      circle.style.transform = 'scale(1.1)';
      circle.style.filter = 'brightness(1.1)';

      setTimeout(() => {
        circle.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        circle.style.transform = 'scale(0.9) translate3d(0px, 20px, 0px)';
        circle.style.opacity = '0';

        setTimeout(() => {
          // Use navigate instead of onServiceSelect prop
          navigate(`/${service}`);
        }, 400);
      }, 300);
    }
  };

  const handleScrollToHome = () => {
    // Use navigate instead of onScrollToHome prop
    navigate('/home');
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transition = 'all 0.3s ease-out';
    e.currentTarget.style.transform = 'scale(1.05) translate3d(0px, -5px, 0px)';
    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.25)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transition = 'all 0.3s ease-out';
    e.currentTarget.style.transform = 'scale(1) translate3d(0px, 0px, 0px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.98) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Clean background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-15" 
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-10" 
        ></div>
      </div>

      {/* Minimal Logo */}
      <div 
        className="absolute top-6 left-6 text-white z-20"
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <span className="text-lg font-semibold text-white">
            GD SERVICES
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ opacity: 0 }}
          >
            L & D  Services
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: 0 }}
          >
            Choose your path to financial success
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-24">
          {/* Banking Circle */}
          <div
            ref={circle1Ref}
            className="cursor-pointer group w-40 h-40 md:w-44 md:h-44 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-lg border border-blue-400/30"
            onClick={() => handleCircleClick('banking')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              opacity: 0,
            }}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:scale-105 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L2 9h3v11h14V9h3L12 3zm0 2.5l6 4V18H6V9.5l6-4zM8 11h2v5H8v-5zm3 0h2v5h-2v-5zm3 0h2v5h-2v-5z"/>
            </svg>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Banking</h3>
            <p className="text-xs text-blue-100/80 px-4">Loans</p>
          </div>

          {/* Insurance Circle */}
          <div
            ref={circle2Ref}
            className="cursor-pointer group w-40 h-40 md:w-44 md:h-44 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex flex-col items-center justify-center shadow-lg border border-cyan-400/30"
            onClick={() => handleCircleClick('insurance')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              opacity: 0,
            }}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:scale-105 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Insurance</h3>
            <p className="text-xs text-cyan-100/80 px-4">Life and General</p>
          </div>

          {/* Education Circle */}
          <div
            ref={circle3Ref}
            className="cursor-pointer group w-40 h-40 md:w-44 md:h-44 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex flex-col items-center justify-center shadow-lg border border-indigo-400/30"
            onClick={() => handleCircleClick('education')} // Fixed to lowercase for consistency
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              opacity: 0,
            }}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:scale-105 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Education</h3>
            <p className="text-xs text-indigo-100/80 px-4">It services</p>
          </div>
        </div>

        {/* Clean Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 text-white cursor-pointer z-10"
          onClick={handleScrollToHome}
          style={{ 
            opacity: 0,
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
            <svg className="w-5 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;