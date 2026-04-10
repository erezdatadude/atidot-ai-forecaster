
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightblue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-8">
              <Zap className="w-4 h-4" />
              AI-Powered Demand Forecasting
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-gray-900">Predict Demand.</span>
              <br />
              <span className="gradient-text">Optimize Supply.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Next-generation AI forecasting that transforms raw sales data
              into actionable intelligence — delivering weekly predictions at
              product and customer level, ready from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-darkblue transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: TrendingUp, stat: "30%+", label: "Improved Forecast Accuracy" },
              { icon: BarChart3, stat: "52 Weeks", label: "Rolling Prediction Window" },
              { icon: Zap, stat: "Day One", label: "Accurate Forecasts Immediately" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm"
              >
                <item.icon className="w-6 h-6 text-brand-blue mb-3" />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">{item.stat}</span>
                <span className="text-sm text-gray-500 mt-1">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
