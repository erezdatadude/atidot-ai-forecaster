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
        AI Forecasts You Can Act On — In Real Time
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Predict demand for every product, at every location — instantly and intelligently.
      </p>
      <p className="mt-4 text-md text-gray-500 max-w-2xl mx-auto">
        Unlike generic tools, ATIDOT.ai is purpose-built for supply chain professionals who need accurate, actionable forecasts — not dashboards full of noise.
      </p>
      <button className="mt-8 bg-[#1F4B99] text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-800 transition">
        Book a Demo
      </button>
    </motion.section>
  );
};

export default HeroSection;
