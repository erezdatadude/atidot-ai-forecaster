
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "One ERP/WMS connection. That's it.",
    highlight: "1-2 weeks setup",
  },
  {
    number: "02",
    title: "AI Calibration",
    description: "Foundation models analyze your patterns and start forecasting immediately.",
    highlight: "First forecasts in days",
  },
  {
    number: "03",
    title: "Alerts & Dashboards",
    description: "Configure thresholds, get interactive dashboards and automated reports.",
    highlight: "10 alert components",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "The platform gets smarter with every data cycle. We monitor, you benefit.",
    highlight: "Always improving",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Live in Weeks.<br />Not Months.
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-200" />
              )}

              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white font-bold text-sm flex items-center justify-center z-10">
                {step.number}
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex-1">
                <h3 className="font-bold text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-base text-gray-500 mb-3">{step.description}</p>
                <span className="inline-flex items-center px-3 py-1 bg-brand-light text-brand-blue text-sm font-medium rounded-full">
                  {step.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
