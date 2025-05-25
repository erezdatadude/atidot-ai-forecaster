import React from "react";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20 rounded-t-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-2xl mb-4 font-sans">ATIDOT.ai</h3>
            <p className="text-gray-400 font-sans">AI-Based Sales & Demand Forecasting</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-sans">Product</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-sans">Resources</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-sans">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li><a href="mailto:info@atidot.ai" className="hover:text-white transition-colors">Email: info@atidot.ai</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 font-sans">© 2025 ATIDOT.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
