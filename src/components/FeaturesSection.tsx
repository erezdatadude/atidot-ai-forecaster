
import { Card, CardContent } from "@/components/ui/card";
import { Database, Layers, Search, Gauge, ArrowRight, CheckCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-brand-teal" />,
      title: "Granular Forecasting",
      description: "Forecast at customer × SKU level with unprecedented detail and accuracy."
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-brand-teal" />,
      title: "52-Week Rolling Forecasts",
      description: "Get weekly updated forecasts that extend a full year ahead for better planning."
    },
    {
      icon: <Search className="h-10 w-10 text-brand-teal" />,
      title: "AI-Based Anomaly Detection",
      description: "Automatically identify sudden spikes, cancellations, and market shifts before they impact your business."
    },
    {
      icon: <Database className="h-10 w-10 text-brand-teal" />,
      title: "Automated Data Integration",
      description: "Connect all your data sources through secure API/ETL for a complete picture."
    },
    {
      icon: <CheckCheck className="h-10 w-10 text-brand-teal" />,
      title: "Continuous Model Retraining",
      description: "Models that learn and improve with every data point for ever-increasing accuracy."
    },
    {
      icon: <Gauge className="h-10 w-10 text-brand-teal" />,
      title: "PowerBI Integration",
      description: "Seamlessly integrate with your existing dashboards for immediate actionability."
    }
  ];

  return (
    <section id="features" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Key Features That Drive Results
          </h2>
          <p className="text-lg text-gray-600">
            ATIDOT.ai combines sophisticated AI with powerful functionality to deliver 
            a complete forecasting solution that grows with your business.
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
            And much more, all designed to scale across 10,000+ product-customer combinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
