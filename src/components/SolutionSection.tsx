
import { motion } from "framer-motion";
import { Brain, BarChart3, Bell, Layers, RefreshCw, Plug } from "lucide-react";

const capabilities = [
  { icon: Brain, title: "AI-Powered", description: "Accurate predictions from day one — ready to deploy immediately." },
  { icon: BarChart3, title: "Sub-SKU Granularity", description: "Forecasts by product, customer, region, and channel." },
  { icon: Bell, title: "10 Smart Alerts", description: "Stockout risk, anomalies, and stagnant inventory — caught early." },
  { icon: Layers, title: "52-Week Horizon", description: "Rolling weekly and monthly forecasts, a full year ahead." },
  { icon: RefreshCw, title: "Continuous Learning", description: "Models recalibrate automatically as new data arrives." },
  { icon: Plug, title: "Plug & Play", description: "Connects to SAP, Power BI, Tableau, and your existing stack." },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            AI That Understands<br />Your Supply Chain
          </h2>
          <p className="text-xl text-gray-500">
            Cutting-edge foundation models. Deep domain expertise. Deployed in weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-4">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-brand-blue" />
                </div>
                <p className="text-lg font-semibold text-gray-400">Platform Dashboard Screenshot</p>
                <p className="text-sm text-gray-300 mt-1">Replace with actual Atidot.ai screenshot</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
