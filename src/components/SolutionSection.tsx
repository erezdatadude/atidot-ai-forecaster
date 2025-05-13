
import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    "Predicts customer orders across all products and customers—weekly and monthly—52 weeks ahead.",
    "Automatically integrates data from ERP, CRM, market intelligence, production plans, inventory, contracts, and more.",
    "Provides anomaly detection, alerts, and AI-driven insights directly into your existing dashboards (e.g., PowerBI).",
    "Delivers continuous learning with performance monitoring and model retraining.",
    "Scales effortlessly across thousands of SKU combinations without performance degradation.",
    "Adapts to market shifts and seasonal patterns automatically."
  ];

  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our AI-Powered Solution
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              ATIDOT.ai revolutionizes demand forecasting by bringing together advanced machine learning, 
              comprehensive data integration, and actionable intelligence—all designed specifically for 
              complex supply chains in pharma, chemicals, and manufacturing.
            </p>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-teal rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">ATIDOT.ai</div>
                  <div className="text-xl">Dashboard Preview</div>
                  <div className="mt-6 text-sm">
                    Visualize forecasts, track accuracy, and receive alerts in real-time
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
