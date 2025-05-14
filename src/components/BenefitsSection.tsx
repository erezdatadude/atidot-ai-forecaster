
import AnimatedCounter from "./AnimatedCounter";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enhance Forecast Accuracy",
      description: "Work with AI insights that help improve accuracy while incorporating your team's expertise and judgment."
    },
    {
      title: "Optimize Inventory Levels",
      description: "Make more informed decisions about safety stock and inventory positions through collaborative analysis."
    },
    {
      title: "Anticipate Demand Changes",
      description: "Get early warning signals about potential demand shifts, giving your team more time to investigate and respond."
    },
    {
      title: "Support Cross-Functional Teamwork",
      description: "Provide a consistent forecast foundation that helps align commercial, supply chain, and finance teams."
    },
    {
      title: "Adapt to Market Changes",
      description: "Respond faster to external disruptions with AI-assisted scenario planning that complements your analysis."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Working Together for Better Results
          </h2>
          <p className="text-lg text-gray-600">
            When your team's expertise pairs with ATIDOT.ai's capabilities, you'll see tangible improvements across your business.
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
            <div className="bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-10 text-center">The Collaborative Impact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <div className="text-center">
                  <AnimatedCounter target={30} suffix="%" />
                  <p className="mt-2 text-lg">Improved Forecast Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Planning Efficiency</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Response to Market Changes</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">↑</p>
                  <p className="mt-2 text-lg">Service Level Performance</p>
                </div>
              </div>
              
              <p className="text-center text-lg italic">
                "ATIDOT.ai enhances how we manage our supply chain, working alongside our team to provide deeper insights into future demand."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
