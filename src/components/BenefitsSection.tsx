
import { motion } from "framer-motion";
import { TrendingUp, Clock, Package, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    metric: "30%+",
    title: "Improved Forecast Accuracy",
    description:
      "Foundation AI models outperform traditional statistical methods by leveraging patterns across industries and product categories.",
    color: "bg-blue-50 text-brand-blue",
  },
  {
    icon: Clock,
    metric: "40%",
    title: "Faster Scenario Planning",
    description:
      "Automated forecasting replaces weeks of manual spreadsheet work with instant, always-current demand projections.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Package,
    metric: "15%",
    title: "Inventory Reduction",
    description:
      "Precise demand signals help optimize safety stock levels, reducing overstock while maintaining service levels.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: DollarSign,
    metric: "ROI",
    title: "Revenue Protection",
    description:
      "Early alerts on stockout risks and atypical order patterns prevent lost sales and protect customer relationships.",
    color: "bg-purple-50 text-purple-600",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            Measurable Results from Day One
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our customers see tangible improvements in forecast accuracy,
            operational efficiency, and bottom-line performance within weeks of
            deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-3xl font-bold text-gray-900 block">{item.metric}</span>
              <h3 className="font-semibold text-gray-900 mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
