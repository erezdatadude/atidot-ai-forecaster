
import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const enhancements = [
    "Augments your existing forecasting processes with AI-powered predictions across all products and customers—weekly and monthly—52 weeks ahead.",
    "Seamlessly integrates data from your existing systems including ERP, CRM, and other sources your team already uses.",
    "Provides anomaly detection and insights that complement your team's analysis and expertise.",
    "Delivers continuous learning capabilities that improve over time as the system learns from your team's adjustments and feedback.",
    "Scales effortlessly to handle thousands of SKU/Client combinations without performance degradation.",
    "Adapts quickly to market shifts and seasonal patterns to support your team's planning efforts."
  ];

  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Enhancing Your Forecasting Capabilities
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              ATIDOT.ai works alongside your team's expertise, enhancing your existing 
              processes with AI-powered insights—designed specifically to complement the 
              valuable work your forecasting professionals already do.
            </p>
            
            <div className="space-y-4">
              {enhancements.map((enhancement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{enhancement}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">ATIDOT.ai</div>
                  <div className="text-xl">Dashboard Preview</div>
                  <div className="mt-6 text-sm">
                    Visualize forecasts, track accuracy, and receive alerts in real-time,
                    working hand-in-hand with your expertise
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
