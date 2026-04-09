
import { motion } from "framer-motion";
import { Brain, BarChart3, Bell, Layers, RefreshCw, Plug } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Foundation Model AI",
    description:
      "Leverages state-of-the-art zero-shot forecasting models that generate accurate predictions without historical training — ready to deploy from day one.",
  },
  {
    icon: BarChart3,
    title: "Sub-SKU Granularity",
    description:
      "Forecasts at the most granular level possible — by product, customer, region, and channel — giving you precise demand signals where they matter most.",
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    description:
      "10 specialized alert components monitor for anomalies, stockout risks, stagnant inventory, and atypical orders before they become costly problems.",
  },
  {
    icon: Layers,
    title: "52-Week Rolling Forecasts",
    description:
      "Continuously updated weekly and monthly predictions that extend a full year ahead, enabling confident long-range planning and procurement decisions.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Models automatically recalibrate as new data arrives, ensuring forecasts stay accurate as market conditions, seasonality, and customer behavior evolve.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description:
      "Connects directly to your ERP, WMS, and BI tools — including SAP, Power BI, and Tableau — with minimal IT overhead and no workflow disruption.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            AI That Understands Your Supply Chain
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Atidot.ai combines cutting-edge foundation models with deep domain
            expertise to deliver forecasting that's accurate, explainable, and
            ready to deploy in weeks — not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/15 transition-colors">
                <item.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
