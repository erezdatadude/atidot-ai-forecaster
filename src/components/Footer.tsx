
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-xl font-bold text-white">ATIDOT</span>
              <span className="text-xl font-bold text-brand-lightblue">.ai</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered demand forecasting built for manufacturers and
              distributors who need accurate, actionable intelligence.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Solution
            </h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", action: () => scrollToSection("how-it-works") },
                { label: "Features", action: () => scrollToSection("features") },
                { label: "Use Cases", action: () => scrollToSection("case-study") },
                { label: "Benefits", action: () => scrollToSection("benefits") },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@atidot.ai"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  info@atidot.ai
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-sm px-4 py-2 bg-brand-blue/20 text-brand-lightblue rounded-lg hover:bg-brand-blue/30 transition-colors"
                >
                  Book a Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ATIDOT.ai &mdash; A{" "}
            <a
              href="https://datadudes.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              DataDudes
            </a>{" "}
            Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
