
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    category: "Forecasting Engine",
    items: [
      "Zero-shot predictions — no historical model training required",
      "Weekly and monthly forecasts at product, customer, and regional level",
      "52-week rolling prediction window updated continuously",
      "Multi-model ensemble for maximum accuracy and reliability",
    ],
  },
  {
    category: "Alert Intelligence",
    items: [
      "Atypical order detection flags unusual purchase patterns",
      "Stockout risk warnings before inventory runs dry",
      "Stagnant inventory identification to free up working capital",
      "Market trend alerts based on external demand signals",
    ],
  },
  {
    category: "Integration & Delivery",
    items: [
      "Direct ERP/WMS connectivity (SAP, Oracle, and more)",
      "Power BI and Tableau dashboard-ready outputs",
      "Automated report generation and distribution",
      "REST API for custom integrations and workflows",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            Platform Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            Everything You Need for Intelligent Forecasting
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A comprehensive platform built for the complexity of modern supply
            chains — from AI-powered predictions to actionable alerts and
            seamless integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
