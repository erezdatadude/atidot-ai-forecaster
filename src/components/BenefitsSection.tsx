import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Superior Forecast Accuracy",
      description: "Advanced algorithms deliver significantly higher accuracy rates across your product portfolio."
    },
    {
      title: "Proactive Demand Management",
      description: "Early detection systems for demand shifts enable strategic response before impact occurs."
    },
    {
      title: "Cross-Functional Integration",
      description: "Unified forecast platform ensures alignment between commercial, supply chain, and finance teams."
    },
    {
      title: "Market Volatility Adaptation",
      description: "AI-assisted scenario analysis enables rapid response to market disruptions and opportunities."
    }
  ];

  return (
    <section id="benefits" className="py-32 px-6 bg-gray-50 rounded-2xl">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue font-sans">
            Performance Advantages
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            ATIDOT.ai delivers measurable improvements across key performance indicators for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue font-sans">{benefit.title}</h3>
                  <p className="text-gray-600 font-sans">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-10 text-center font-sans">Performance Impact</h3>

              <div className="flex flex-col items-center space-y-8 mb-8 text-center">
                <div>
                  <AnimatedCounter target={40} suffix="%" />
                  <p className="mt-2 text-lg font-sans text-white">Faster Scenario Planning</p>
                </div>
                <div>
                  <AnimatedCounter target={30} suffix="%" />
                  <p className="mt-2 text-lg font-sans text-white">Improved Forecast Accuracy</p>
                </div>
                <div>
                  <AnimatedCounter target={15} suffix="%" />
                  <p className="mt-2 text-lg font-sans text-white">Inventory Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
