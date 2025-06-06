import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3' 
          : 'bg-white/90 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center text-2xl md:text-3xl font-serif font-light tracking-wider transition-all duration-300 text-black hover:opacity-75 z-60 relative"
          >
            
            <span className="ml-3">SuKnows</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className="text-sm font-light tracking-wide uppercase transition-all duration-300 text-gray-800"
            >
              Home
            </Link>
            <Link 
              to="/fashion" 
              className="text-sm font-light tracking-wide uppercase transition-all duration-300 text-gray-800"
            >
              Fashion
            </Link>
            <Link 
              to="/beauty" 
              className="text-sm font-light tracking-wide uppercase transition-all duration-300 text-gray-800"
            >
              Beauty
            </Link>
            <Link 
              to="/skincare" 
              className="text-sm font-light tracking-wide uppercase transition-all duration-300 text-gray-800"
            >
              Skincare
            </Link>
          </nav>

          {/* Pinterest Link */}
          <div className="hidden md:flex items-center">
            
              <img 
              src="/logo.png" 
              className="h-16 w-28 object-contain transition-transform transition-colors duration-300 hover:scale-110 hover:text-blue-600"
            />
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-red-600 transition-all duration-300"
              aria-label="Follow us on Pinterest"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="hover:scale-110 transition-transform duration-300"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.618-.31-1.532c0-1.434.83-2.505 1.864-2.505.879 0 1.303.66 1.303 1.448 0 .883-.563 2.204-.853 3.427-.243 1.027.514 1.864 1.527 1.864 1.833 0 3.243-1.93 3.243-4.706 0-2.463-1.77-4.188-4.305-4.188-2.929 0-4.648 2.196-4.648 4.472 0 .886.341 1.836.766 2.354.084.101.096.19.071.293-.077.323-.25 1.011-.284 1.152-.043.18-.141.219-.326.132-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            
              
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-all duration-300 text-gray-800 hover:opacity-60 z-60 relative"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'visible opacity-100 z-40' 
            : 'invisible opacity-0 z-40'
        }`}
        style={{ top: '175px', left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 pt-8">
          <Link 
            to="/" 
            className="text-2xl font-light tracking-wider text-gray-800 hover:opacity-60 transition-all duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/fashion" 
            className="text-2xl font-light tracking-wider text-gray-800 hover:opacity-60 transition-all duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Fashion
          </Link>
          <Link 
            to="/beauty" 
            className="text-2xl font-light tracking-wider text-gray-800 hover:opacity-60 transition-all duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Beauty
          </Link>
          <Link 
            to="/skincare" 
            className="text-2xl font-light tracking-wider text-gray-800 hover:opacity-60 transition-all duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Skincare
          </Link>
          
          {/* Mobile Pinterest Link */}
          <div className="pt-6">

            <img 
              src="/logo.png" 
              className="h-16 w-28 object-contain transition-transform transition-colors duration-300 hover:scale-110 hover:text-blue-600"
            />
            
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-red-600 transition-all duration-300 block"
              aria-label="Follow us on Pinterest"
            >
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="hover:scale-110 transition-transform duration-300 mx-auto"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.618-.31-1.532c0-1.434.83-2.505 1.864-2.505.879 0 1.303.66 1.303 1.448 0 .883-.563 2.204-.853 3.427-.243 1.027.514 1.864 1.527 1.864 1.833 0 3.243-1.93 3.243-4.706 0-2.463-1.77-4.188-4.305-4.188-2.929 0-4.648 2.196-4.648 4.472 0 .886.341 1.836.766 2.354.084.101.096.19.071.293-.077.323-.25 1.011-.284 1.152-.043.18-.141.219-.326.132-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;