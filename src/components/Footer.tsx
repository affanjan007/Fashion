import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-serif font-light tracking-wider mb-6">SuKnows</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                Where sophistication meets style. Discover curated fashion, beauty secrets, 
                and skincare wisdom that elevates your everyday SuKnows.
              </p>
              <div className="flex space-x-5">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 border border-gray-600 rounded-full hover:border-white hover:bg-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram 
                    size={18} 
                    className="text-gray-300 group-hover:text-black transition-colors duration-300" 
                  />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 border border-gray-600 rounded-full hover:border-white hover:bg-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook 
                    size={18} 
                    className="text-gray-300 group-hover:text-black transition-colors duration-300" 
                  />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 border border-gray-600 rounded-full hover:border-white hover:bg-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter 
                    size={18} 
                    className="text-gray-300 group-hover:text-black transition-colors duration-300" 
                  />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 border border-gray-600 rounded-full hover:border-white hover:bg-white transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-gray-300 group-hover:text-black transition-colors duration-300"
                  >
                    <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm1.586 19.414c-.861.861-2.633.861-3.414 0-.861-.861-.861-2.633 0-3.414l6.364-6.364c.861-.861 2.633-.861 3.414 0 .861.861.861 2.633 0 3.414l-6.364 6.364z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Explore</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/fashion" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                  >
                    Fashion
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/beauty" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                  >
                    Beauty
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/skincare" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                  >
                    Skincare
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.pinterest.com/mtfarley2/style-guides/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Style Guide
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.healthline.com/health/beauty-skin-care/skin-care-tips" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Beauty Tips
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.trendreports.com/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Trend Reports
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.pinterest.com/vasariny/seasons-lookbook/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Seasonal Lookbook
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.pinterest.com/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Pinterest
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Instagram
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Facebook
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group relative"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Twitter
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-xs tracking-wide">
                &copy; {currentYear} SuKnows. Crafted with SuKnows.
              </p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <span>Made with</span>
                <span className="text-red-400 text-sm">♡</span>
                <span>for style enthusiasts</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xs tracking-wide"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xs tracking-wide"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xs tracking-wide"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp 
          size={20} 
          className="group-hover:scale-110 transition-transform duration-300" 
        />
      </button>
    </footer>
  );
};

export default Footer;