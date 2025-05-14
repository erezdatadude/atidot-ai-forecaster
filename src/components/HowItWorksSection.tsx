
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Existing Systems",
      description: "We securely integrate with your current data systems through encrypted API/ETL connections, with no disruption to your ongoing processes.",
      highlight: "Minimal IT effort required"
    },
    {
      number: 2,
      title: "Collaborative Learning Phase",
      description: "Our AI algorithms work with your historical data while your team provides context and feedback to refine the models.",
      highlight: "Your expertise enhances the AI"
    },
    {
      number: 3,
      title: "Enhance Your Forecasting Process",
      description: "Start receiving AI-enhanced forecasts and alerts that complement your team's analysis through your existing tools.",
      highlight: "Works with your current workflows"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            A Collaborative Approach
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai is designed to integrate smoothly with your existing processes and enhance your team's capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-8">
                {step.number}
              </div>
              
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-brand-purple font-semibold">{step.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-8 text-lg text-gray-700">
            Most teams see measurable improvements in forecast accuracy while reducing manual effort within the first month.
          </p>
          <Button className="bg-brand-blue hover:bg-brand-purple text-white px-8 py-6 text-lg transition-colors">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
