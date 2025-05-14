
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const challenges = [
    {
      title: "Time-Intensive Processes",
      description: "Current forecasting methods often require significant time investment from your team, taking focus away from strategic analysis."
    },
    {
      title: "Data Integration Challenges",
      description: "Bringing together data from multiple sources can be challenging, even with the best manual processes."
    },
    {
      title: "Long-Term Planning",
      description: "Creating accurate long-range forecasts is challenging with traditional methods, even for experienced teams."
    },
    {
      title: "Market Volatility Response",
      description: "Quickly adapting forecasts to unexpected market changes requires significant effort and analysis."
    },
    {
      title: "Resource Balancing",
      description: "Balancing inventory optimization with customer service levels is increasingly complex in today's market."
    },
    {
      title: "Cross-Functional Alignment",
      description: "Ensuring all departments work from the same forecast data can be challenging without integrated systems."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Common Forecasting Challenges
          </h2>
          <p className="text-lg text-gray-600">
            Even the most experienced forecasting teams face these common challenges 
            in today's complex and fast-moving market environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
