
import { motion } from "framer-motion";
import { TrendingUp, Clock, Package, DollarSign } from "lucide-react";

const benefits = [
  { icon: TrendingUp, metric: "30%+", title: "Better Accuracy", color: "bg-blue-50 text-brand-blue" },
  { icon: Clock, metric: "40%", title: "Faster Planning", color: "bg-emerald-50 text-emerald-600" },
  { icon: Package, metric: "15%", title: "Less Inventory", color: "bg-amber-50 text-amber-600" },
  { icon: DollarSign, metric: "ROI", title: "Revenue Protected", color: "bg-purple-50 text-purple-600" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Results That Speak<br />for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-4xl md:text-5xl font-bold text-gray-900 block">{item.metric}</span>
              <h3 className="font-semibold text-gray-500 text-lg mt-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
