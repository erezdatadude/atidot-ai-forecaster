
import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const capabilities = [
    "Provides AI-powered time-series modeling for accurate sales and demand forecasting across all products and customers—delivering weekly and monthly forecasts 52 weeks ahead.",
    "Seamlessly connects with existing ERP, CRM, and other data systems through secure API/ETL connections.",
    "Identifies anomalies in sales patterns and provides actionable insights to drive improved forecast performance.",
    "Features advanced machine learning capabilities that continuously refine accuracy through feedback loops and pattern recognition.",
    "Scales to handle thousands of SKU/Client combinations with consistent performance and precision.",
    "Adapts rapidly to market shifts and seasonal patterns through advanced time-series analytics and forecasting models."
  ];

  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Advanced Time-Series Forecasting Technology
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              ATIDOT.ai delivers cutting-edge AI-powered sales and demand forecasting that augments your
              existing processes with superior accuracy, granularity, and efficiency.
            </p>
            
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{capability}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">ATIDOT.ai</div>
                  <div className="text-xl">Sales & Demand Forecasting</div>
                  <div className="mt-6 text-sm">
                    Advanced time-series visualization, accuracy tracking, and real-time alerting
                    capabilities for superior sales and demand forecasting performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
