
import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Bell, Plug } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    category: "Forecasting Engine",
    items: [
      "Ready to deploy from day one",
      "Weekly & monthly at product/customer level",
      "52-week rolling prediction window",
      "Multi-model ensemble for reliability",
    ],
  },
  {
    icon: Bell,
    category: "Alert Intelligence",
    items: [
      "Atypical order detection",
      "Stockout risk warnings",
      "Stagnant inventory alerts",
      "Market trend signals",
    ],
  },
  {
    icon: Plug,
    category: "Integration",
    items: [
      "Direct ERP/WMS connectivity",
      "Power BI & Tableau ready",
      "Automated report distribution",
      "REST API for custom workflows",
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
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-500">
            From AI predictions to actionable alerts and seamless integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <group.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{group.category}</h3>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
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
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-4">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-brand-blue" />
                </div>
                <p className="text-lg font-semibold text-gray-400">Alert Dashboard Screenshot</p>
                <p className="text-sm text-gray-300 mt-1">Replace with actual Atidot.ai alert view</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
