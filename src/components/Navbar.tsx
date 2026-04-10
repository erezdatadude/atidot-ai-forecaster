
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Solution", action: () => scrollToSection("solution") },
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Use Cases", action: () => scrollToSection("case-study") },
    { label: "How It Works", action: () => scrollToSection("how-it-works") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="flex items-center gap-0.5"
          >
            <span className="text-2xl font-bold tracking-tight text-brand-darkblue">
              ATIDOT
            </span>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-brand-blue" : "text-brand-lightblue"
            }`}>
              .ai
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isScrolled ? "text-gray-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/contact")}
              className="px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-brand-darkblue transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Demo
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-brand-light rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/contact");
                }}
                className="mx-4 mt-3 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-brand-darkblue transition-all text-center"
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
