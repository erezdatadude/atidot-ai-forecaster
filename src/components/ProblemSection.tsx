
import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Inaccurate Forecasts",
    description:
      "Traditional models rely on limited historical data and static assumptions, leading to chronic over- or under-forecasting that erodes margins.",
  },
  {
    icon: Clock,
    title: "Slow Scenario Planning",
    description:
      "Manual spreadsheet-based planning takes weeks to produce results, leaving teams unable to respond to sudden market shifts in time.",
  },
  {
    icon: ShieldX,
    title: "Stockouts & Overstock",
    description:
      "Poor demand visibility causes costly stockouts that lose revenue and excess inventory that ties up working capital.",
  },
  {
    icon: AlertTriangle,
    title: "No Early Warning System",
    description:
      "By the time problems surface in traditional reporting, it's already too late — the damage to customer satisfaction and revenue is done.",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            Why Traditional Forecasting Falls Short
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Manufacturing and distribution companies lose millions annually to
            inaccurate demand planning. Legacy tools simply can't keep pace with
            today's volatile markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
