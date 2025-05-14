
import AnimatedCounter from "./AnimatedCounter";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Superior Forecast Accuracy",
      description: "Advanced algorithms deliver significantly higher accuracy rates across your product portfolio."
    },
    {
      title: "Optimized Inventory Management",
      description: "Data-driven inventory decisions based on precise demand forecasts across all SKUs."
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
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Performance Advantages
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai delivers measurable improvements across key performance indicators for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-10 text-center">Performance Impact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <div className="text-center">
                  <AnimatedCounter target={30} suffix="%" />
                  <p className="mt-2 text-lg">Improved Forecast Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Operational Efficiency</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Market Response Capability</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Service Level Performance</p>
                </div>
              </div>
              
              <p className="text-center text-lg italic">
                "ATIDOT.ai has transformed our demand forecasting capabilities with its advanced analytics platform."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
