import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const challenges = [
    {
      title: "Time-Intensive Processes",
      description: "Traditional forecasting methods require significant time investment, limiting strategic analysis capabilities."
    },
    {
      title: "Data Integration Complexity",
      description: "Integrating data from multiple sources creates significant challenges for manual forecasting processes."
    },
    {
      title: "Long-Term Planning Barriers",
      description: "Creating accurate long-range forecasts presents significant challenges with conventional methodologies."
    },
    {
      title: "Market Volatility Response",
      description: "Adapting forecasts quickly to unexpected market changes requires substantial analytical resources."
    },
    {
      title: "Resource Optimization",
      description: "Balancing inventory optimization with service level requirements presents increasingly complex challenges."
    },
    {
      title: "Cross-Functional Alignment",
      description: "Ensuring unified forecast data across departments requires sophisticated integration systems."
    }
  ];

  return (
    <section id="problem" className="py-32 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue font-sans">
            Forecasting Challenges
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Modern forecasting operations face significant obstacles in today’s
            complex and fast-evolving market environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-lightblue flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 font-sans">{challenge.title}</h3>
                <p className="text-gray-600 font-sans">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
