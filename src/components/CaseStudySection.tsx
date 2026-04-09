
import { motion } from "framer-motion";
import { Factory, TrendingUp, Package, Timer, Quote } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            From Spreadsheets<br />to AI in 8 Weeks
          </h2>
          <p className="text-xl text-gray-500">
            How a leading pharmaceutical manufacturer transformed demand planning.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Challenge → Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
            >
              <h4 className="font-bold text-gray-900 text-2xl mb-6">Before</h4>
              <ul className="space-y-4 text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Only ~20% of products were forecast
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Recurring stockouts costing millions per quarter
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  No early-warning system for demand anomalies
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Weeks spent on manual data reconciliation
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-2xl p-8 text-white"
            >
              <h4 className="font-bold text-2xl mb-6">After Atidot.ai</h4>
              <ul className="space-y-4 text-base text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 mt-2" />
                  100% portfolio coverage deployed in 8 weeks
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 mt-2" />
                  Direct ERP integration — zero workflow disruption
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 mt-2" />
                  All 10 alert components active from day one
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 mt-2" />
                  Interactive dashboards + automated weekly reports
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Results Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-light rounded-2xl p-10 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: "100%", label: "Portfolio Coverage" },
                { icon: Package, value: "35%", label: "Fewer Stockouts" },
                { icon: Timer, value: "8 Wks", label: "Time to Deploy" },
                { icon: Factory, value: "500+", label: "SKUs Forecast" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <metric.icon className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 block">{metric.value}</span>
                  <span className="text-base font-medium text-gray-500 mt-1">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Quote className="w-10 h-10 text-brand-blue/20 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed font-medium">
              "We went from forecasting a handful of products in spreadsheets
              to AI-driven predictions across our entire portfolio."
            </blockquote>
            <p className="text-base text-gray-400 mt-4">
              — VP of Supply Chain
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
