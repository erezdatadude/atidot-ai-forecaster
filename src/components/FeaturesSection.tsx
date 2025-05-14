
import { Card, CardContent } from "@/components/ui/card";
import { Database, Layers, Search, Gauge, ArrowRight, CheckCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-brand-purple" />,
      title: "Enhanced Granularity",
      description: "Supplement your forecast process with customer × SKU level details for better planning."
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-brand-purple" />,
      title: "52-Week Rolling Forecasts",
      description: "Extend your planning horizon with AI-enhanced forecasts that complement your team's work."
    },
    {
      icon: <Search className="h-10 w-10 text-brand-purple" />,
      title: "Intelligent Anomaly Detection",
      description: "Get early warnings about potential spikes or drops, giving your team more time to analyze and respond."
    },
    {
      icon: <Database className="h-10 w-10 text-brand-purple" />,
      title: "Seamless Data Integration",
      description: "Connect to your existing systems without disrupting your current workflows and processes."
    },
    {
      icon: <CheckCheck className="h-10 w-10 text-brand-purple" />,
      title: "Continuous Learning",
      description: "The system improves by learning from your team's expertise, adjustments, and feedback over time."
    },
    {
      icon: <Gauge className="h-10 w-10 text-brand-purple" />,
      title: "Dashboard Compatibility",
      description: "Export forecast data via CSV to work with whichever dashboard or BI tool your team prefers."
    }
  ];

  return (
    <section id="features" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Supportive Features For Your Team
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai brings powerful capabilities that work alongside your existing processes, 
            enhancing your team's forecasting abilities without replacing their valuable expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-blue font-semibold text-lg">
            All designed to scale alongside your business needs across thousands of product-customer combinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
