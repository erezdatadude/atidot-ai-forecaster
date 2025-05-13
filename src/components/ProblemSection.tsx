
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Reactive & Manual",
      description: "Current forecasting relies on manual data entry, outdated methods, and delayed responses to market changes."
    },
    {
      title: "Limited Granularity",
      description: "Legacy tools struggle with SKU-level forecasting, failing to provide the detail needed for precise inventory management."
    },
    {
      title: "Poor Long-Term Planning",
      description: "Most systems can't accurately predict beyond a few weeks, making strategic planning difficult."
    },
    {
      title: "Market Volatility",
      description: "Traditional systems falter when facing unexpected market shifts, leading to costly misjudgments."
    },
    {
      title: "Inventory Misalignment",
      description: "Inaccurate forecasts lead to stockouts or overproduction, causing financial losses and customer dissatisfaction."
    },
    {
      title: "Data Silos",
      description: "Critical information remains trapped in disconnected systems, preventing holistic forecasting."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            The Problem With Traditional Forecasting
          </h2>
          <p className="text-lg text-gray-600">
            In today's fast-paced market, legacy forecasting tools are holding businesses back,
            creating costly inefficiencies and missed opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
