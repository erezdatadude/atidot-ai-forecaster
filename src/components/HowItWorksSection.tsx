
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "System Integration",
      description: "We establish secure API/ETL connections to your data systems with enterprise-grade encryption and minimal IT requirements.",
      highlight: "Rapid, secure implementation"
    },
    {
      number: 2,
      title: "Model Calibration",
      description: "Our algorithms analyze historical data patterns while incorporating domain-specific parameters for your industry vertical.",
      highlight: "Advanced data science methodology"
    },
    {
      number: 3,
      title: "Operational Deployment",
      description: "The system delivers AI-enhanced forecasts through your preferred interface, with comprehensive documentation and support.",
      highlight: "Seamless workflow integration"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Implementation Process
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai follows a streamlined deployment methodology designed for minimal disruption and rapid time-to-value.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-lightblue flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-8">
                {step.number}
              </div>
              
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-brand-blue font-semibold">{step.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-8 text-lg text-gray-700">
            Organizations typically experience measurable forecast accuracy improvements within 30 days of implementation.
          </p>
          <Button className="bg-brand-blue hover:bg-brand-darkblue text-white px-8 py-6 text-lg transition-colors">
            Request Implementation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
