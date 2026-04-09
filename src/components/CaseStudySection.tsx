
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            Transforming Demand Planning in Pharmaceutical Manufacturing
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-2xl p-8 md:p-10 text-white mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Leading Pharmaceutical Manufacturer</h3>
                <p className="text-blue-200 text-sm">Global generic pharmaceuticals — 500+ product SKUs across multiple markets</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              A major pharmaceutical manufacturer needed to replace their manual,
              spreadsheet-based forecasting process that covered only a fraction
              of their product portfolio. They required a scalable AI solution
              capable of generating accurate demand forecasts across hundreds of
              SKUs, customers, and distribution channels — with intelligent
              early-warning alerts for supply chain disruptions.
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
            >
              <h4 className="font-bold text-gray-900 mb-4 text-lg">The Challenge</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Manual forecasting covered only ~20% of the product portfolio, leaving the majority unforecast
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Recurring stockouts on key products were costing millions in lost revenue per quarter
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  No early-warning system for demand anomalies or supply chain disruptions
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  Planning team spent weeks on manual data reconciliation instead of strategic analysis
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
            >
              <h4 className="font-bold text-gray-900 mb-4 text-lg">The Solution</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                  Deployed Atidot.ai's zero-shot forecasting engine across the full product portfolio in under 8 weeks
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                  Integrated directly with the existing ERP system — no workflow disruption required
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                  Activated all 10 alert components for proactive anomaly and risk detection
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                  Delivered forecasts via interactive dashboards and automated weekly reports
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Results Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-brand-light rounded-2xl p-8"
          >
            <h4 className="font-bold text-gray-900 text-lg mb-6 text-center">Results Achieved</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, value: "100%", label: "Portfolio Coverage", sublabel: "Up from ~20%" },
                { icon: Package, value: "35%", label: "Fewer Stockouts", sublabel: "Within first quarter" },
                { icon: Timer, value: "8 Weeks", label: "Time to Deploy", sublabel: "Full production rollout" },
                { icon: Factory, value: "500+", label: "SKUs Forecast", sublabel: "Weekly & monthly" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <metric.icon className="w-6 h-6 text-brand-blue mx-auto mb-2" />
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 block">{metric.value}</span>
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <span className="text-xs text-gray-500 block mt-0.5">{metric.sublabel}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Quote className="w-8 h-8 text-brand-blue/30 mx-auto mb-4" />
            <blockquote className="text-lg md:text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
              "Atidot.ai gave us visibility we never had before. We went from
              forecasting a handful of products in spreadsheets to having
              AI-driven predictions across our entire portfolio — with alerts
              that catch problems before they impact our customers."
            </blockquote>
            <p className="text-sm text-gray-500 mt-4">
              — VP of Supply Chain, Leading Pharmaceutical Manufacturer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
