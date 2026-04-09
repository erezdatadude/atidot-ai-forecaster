
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description:
      "We integrate directly with your ERP or WMS system to ingest historical sales, inventory, and order data. Setup is lightweight — typically a single data export or API connection.",
    highlight: "Typical setup: 1-2 weeks",
  },
  {
    number: "02",
    title: "AI Calibration",
    description:
      "Our foundation AI models analyze your data patterns, product hierarchies, and demand signals. Zero-shot models begin generating forecasts immediately, then fine-tune for your specific business context.",
    highlight: "First forecasts generated within days",
  },
  {
    number: "03",
    title: "Activate Alerts & Dashboards",
    description:
      "Configure intelligent alert thresholds for your business — from stockout risk to atypical order detection. Forecasts and alerts are delivered through interactive dashboards and automated reports.",
    highlight: "10 alert components, fully configurable",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description:
      "The platform continuously recalibrates as new data flows in. Our team monitors forecast accuracy metrics and works with yours to optimize model performance over time.",
    highlight: "Accuracy improves with every data cycle",
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
            Implementation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            From Data to Predictions in Weeks
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A streamlined four-step process designed for fast time-to-value
            with minimal disruption to your existing operations.
          </p>
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
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gray-200" />
              )}

              {/* Number badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white font-bold text-sm flex items-center justify-center z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.description}</p>
                <span className="inline-flex items-center px-3 py-1 bg-brand-light text-brand-blue text-xs font-medium rounded-full">
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
