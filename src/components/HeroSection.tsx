import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="bg-white text-gray-900 py-24 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold leading-tight">
        AI-Based Modeling for Sales & Demand Forecasting
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Forecast demand across every product and customer combination — and plan your supply chain accordingly.
      </p>
      <button className="mt-8 bg-[#1F4B99] text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-800 transition">
        Book a Demo
      </button>
    </motion.section>
  );
};

export default HeroSection;
