
import AnimatedCounter from "./AnimatedCounter";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Improve Forecast Accuracy",
      description: "Achieve up to 30% greater accuracy compared to traditional forecasting methods."
    },
    {
      title: "Reduce Inventory Waste",
      description: "Cut down safety stock and eliminate excess inventory while maintaining service levels."
    },
    {
      title: "Prevent Costly Shortages",
      description: "Anticipate demand spikes before they happen to prevent stockouts and lost sales."
    },
    {
      title: "Empower Cross-Functional Teams",
      description: "Give commercial, supply, and finance teams the data they need for aligned decision-making."
    },
    {
      title: "Respond to Market Shifts",
      description: "React faster to external disruptions with early warning signals and scenario planning."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Real Business Benefits
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai delivers tangible improvements that directly impact your bottom line.
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
            <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-10 text-center">The ATIDOT.ai Impact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <div className="text-center">
                  <AnimatedCounter target={30} suffix="%" />
                  <p className="mt-2 text-lg">Improved Forecast Accuracy</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter target={25} suffix="%" />
                  <p className="mt-2 text-lg">Reduced Safety Stock</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter target={40} suffix="%" />
                  <p className="mt-2 text-lg">Faster Response to Market Shifts</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter target={20} suffix="%" />
                  <p className="mt-2 text-lg">Increase in Service Levels</p>
                </div>
              </div>
              
              <p className="text-center text-lg italic">
                "ATIDOT.ai transformed how we manage our supply chain, giving us unprecedented visibility into future demand."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
