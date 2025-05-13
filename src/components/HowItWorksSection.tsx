
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Data Sources",
      description: "Securely connect your ERP, CRM, and other systems through our encrypted API/ETL integrations. No manual data entry required.",
      highlight: "Setup in days, not months"
    },
    {
      number: 2,
      title: "Let ATIDOT.ai Learn Your Patterns",
      description: "Our AI algorithms analyze historical data and real-time patterns across your product portfolio and customer base.",
      highlight: "Continuous learning & improvement"
    },
    {
      number: 3,
      title: "Start Receiving Forecasts & Alerts",
      description: "Access weekly forecasts, alerts, and actionable insights through your preferred visualization tools or our dashboard.",
      highlight: "Immediate value delivery"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting started with ATIDOT.ai is simple and delivers value quickly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-8">
                {step.number}
              </div>
              
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-brand-teal font-semibold">{step.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-8 text-lg text-gray-700">
            Most clients see measurable improvements in forecast accuracy within the first month.
          </p>
          <Button className="bg-brand-blue hover:bg-brand-teal text-white px-8 py-6 text-lg transition-colors">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
