
import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldX, TrendingDown } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "Inaccurate Forecasts", description: "Static models and limited data erode margins." },
  { icon: Clock, title: "Slow Planning", description: "Weeks of manual spreadsheets can't keep pace." },
  { icon: ShieldX, title: "Stockouts & Overstock", description: "Poor visibility costs revenue and ties up capital." },
  { icon: AlertTriangle, title: "No Early Warnings", description: "Problems surface too late to act on." },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Legacy Forecasting<br />Is Broken
          </h2>
          <p className="text-xl text-gray-500">
            Companies lose millions to outdated demand planning tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-base text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
