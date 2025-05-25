import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "System Integration",
      description:
        "We establish secure API/ETL connections to your data systems with enterprise-grade encryption and minimal IT requirements.",
      highlight: "Rapid, secure implementation"
    },
    {
      number: 2,
      title: "Model Calibration",
      description:
        "Our algorithms analyze historical data patterns while incorporating domain-specific parameters for your industry vertical.",
      highlight: "Advanced data science methodology"
    },
    {
      number: 3,
      title: "Operational Deployment",
      description:
        "The system delivers AI-enhanced forecasts through your preferred interface, with comprehensive documentation and support.",
      highlight: "Seamless workflow integration"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue font-sans">
            Implementation Process
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            ATIDOT.ai follows a streamlined deployment methodology designed for minimal disruption and rapid time-to-value.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-lightblue flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-8">
                {step.number}
              </div>

              <div className="flex-grow bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-3 text-brand-blue font-sans">{step.title}</h3>
                <p className="text-gray-600 mb-3 font-sans">{step.description}</p>
                <p className="text-brand-blue font-semibold font-sans">{step.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
