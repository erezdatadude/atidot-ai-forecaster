
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, TrendingUp, Package, Timer, Quote, DollarSign, Target, Layers, Zap } from "lucide-react";

type CaseStudy = {
  id: string;
  tab: string;
  industry: string;
  headline: React.ReactNode;
  subhead: string;
  before: string[];
  after: string[];
  metrics: { icon: React.ElementType; value: string; label: string }[];
  quote: string;
  attribution: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "pharma",
    tab: "Pharma",
    industry: "Pharmaceutical Manufacturing",
    headline: (
      <>
        From Spreadsheets<br />to AI in 8 Weeks
      </>
    ),
    subhead: "How a leading pharmaceutical manufacturer transformed demand planning.",
    before: [
      "Only ~20% of products were forecast",
      "Recurring stockouts costing millions per quarter",
      "No early-warning system for demand anomalies",
      "Weeks spent on manual data reconciliation",
    ],
    after: [
      "100% portfolio coverage deployed in 8 weeks",
      "Direct ERP integration — zero workflow disruption",
      "All 10 alert components active from day one",
      "Interactive dashboards + automated weekly reports",
    ],
    metrics: [
      { icon: TrendingUp, value: "100%", label: "Portfolio Coverage" },
      { icon: Package, value: "35%", label: "Fewer Stockouts" },
      { icon: Timer, value: "8 Wks", label: "Time to Deploy" },
      { icon: Factory, value: "500+", label: "SKUs Forecast" },
    ],
    quote:
      "We went from forecasting a handful of products in spreadsheets to AI-driven predictions across our entire portfolio.",
    attribution: "— VP of Supply Chain",
  },
  {
    id: "materials",
    tab: "Specialty Materials",
    industry: "Specialty Materials Manufacturing",
    headline: (
      <>
        Smart Pricing<br />Inside Salesforce
      </>
    ),
    subhead:
      "How a global specialty materials group replaced rigid pricing tools with adaptive AI corridors.",
    before: [
      "2,000+ SKUs across four operating companies",
      "Legacy pricing tool covered only a subset of portfolio",
      "Static recommendations didn't adapt to market shifts",
      "Inconsistent quotes and missed margin opportunities",
    ],
    after: [
      "94% portfolio coverage — 1,904 of 2,032 SKUs",
      "Target / min / max margin corridors refreshed weekly",
      "Live inside Salesforce — zero workflow change for reps",
      "Adoption Rate KPI + fully automated data pipeline",
    ],
    metrics: [
      { icon: Target, value: "94%", label: "Portfolio Coverage" },
      { icon: Layers, value: "4", label: "Business Units" },
      { icon: DollarSign, value: "2,000+", label: "SKUs Priced" },
      { icon: Zap, value: "Weekly", label: "Auto Refresh" },
    ],
    quote:
      "We needed a pricing system that learns the way our business actually works — across four companies, thousands of products, and constantly shifting raw material costs. Atidot.ai delivered that in weeks, not years.",
    attribution: "— Head of Pricing",
  },
];

const CaseStudySection = () => {
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const active = caseStudies.find((c) => c.id === activeId)!;

  return (
    <section id="case-study" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            {active.headline}
          </h2>
          <p className="text-xl text-gray-500">{active.subhead}</p>
        </motion.div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveId(cs.id)}
                className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all ${
                  activeId === cs.id
                    ? "bg-white text-brand-blue shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cs.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Challenge → Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h4 className="font-bold text-gray-900 text-2xl mb-6">Before</h4>
                  <ul className="space-y-4 text-base text-gray-600">
                    {active.before.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-2xl p-8 text-white">
                  <h4 className="font-bold text-2xl mb-6">After Atidot.ai</h4>
                  <ul className="space-y-4 text-base text-blue-100">
                    {active.after.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="bg-brand-light rounded-2xl p-10 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {active.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <metric.icon className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                      <span className="text-3xl md:text-4xl font-bold text-gray-900 block">
                        {metric.value}
                      </span>
                      <span className="text-base font-medium text-gray-500 mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="text-center">
                <Quote className="w-10 h-10 text-brand-blue/20 mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed font-medium">
                  "{active.quote}"
                </blockquote>
                <p className="text-base text-gray-400 mt-4">{active.attribution}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
