
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Let's Talk About Your Forecasting Needs
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to see how AI-powered demand forecasting can transform your
              operations? Fill out the form below and we'll get back to you
              within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12 max-w-lg mx-auto"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <Mail className="w-5 h-5 text-brand-blue" />
              <div>
                <span className="text-xs text-gray-500 block">Email</span>
                <a href="mailto:info@atidot.ai" className="text-sm font-medium text-gray-900 hover:text-brand-blue transition-colors">
                  info@atidot.ai
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <div>
                <span className="text-xs text-gray-500 block">Based in</span>
                <span className="text-sm font-medium text-gray-900">Israel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
