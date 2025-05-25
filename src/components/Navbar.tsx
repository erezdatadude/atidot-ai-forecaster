import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCta = () => {
    if (location.pathname === '/') {
      const ctaSection = document.querySelector('.gradient-bg');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const demoButton = document.querySelector('.gradient-bg .bg-white') as HTMLButtonElement;
          if (demoButton) {
            demoButton.click();
          }
        }, 1000);
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-brand-blue font-sans">
            ATIDOT<span className="text-brand-blue2">.ai</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6 font-sans">
          {location.pathname === '/' ? (
            <>
              <a href="#problem" className="text-gray-600 hover:text-brand-blue transition-colors">
                Challenges
              </a>
              <a href="#solution" className="text-gray-600 hover:text-brand-blue transition-colors">
                Solution
              </a>
              <a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-brand-blue transition-colors">
                Benefits
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-brand-blue transition-colors">
                Implementation
              </a>
            </>
          ) : (
            <>
              <a href="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                Contact
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
