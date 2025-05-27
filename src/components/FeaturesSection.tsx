import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Layers,
  Search,
  Gauge,
  ArrowRight,
  CheckCheck
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-brand-blue" />,
      title: "Enhanced Granularity",
      description: "Customer × SKU level forecasting for precise planning and inventory optimization."
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-brand-blue" />,
      title: "52-Week Rolling Forecasts",
      description: "Extended planning horizon with AI-enhanced forecasts for superior strategic decision-making."
    },
    {
      icon: <Search className="h-10 w-10 text-brand-blue" />,
      title: "Intelligent Anomaly Detection",
      description: "Advanced algorithms identify potential demand shifts before they impact your business."
    },
    {
      icon: <Database className="h-10 w-10 text-brand-blue" />,
      title: "Easy Data Integration",
      description: "Enterprise-grade connectors for your existing systems with minimal IT implementation requirements."
    },
    {
      icon: <CheckCheck className="h-10 w-10 text-brand-blue" />,
      title: "Continuous Learning",
      description: "Self-optimizing algorithms that improve forecast accuracy through pattern recognition and feedback."
    },
    {
      icon: <Gauge className="h-10 w-10 text-brand-blue" />,
      title: "Dashboard Compatibility",
      description: "API and export capabilities compatible with all major business intelligence platforms."
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-brand-light rounded-2xl">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue font-sans">
            Advanced Capabilities
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            ATIDOT.ai provides sophisticated forecasting technology that enhances
            your organization's planning and execution capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-blue font-sans">{feature.title}</h3>
                  <p className="text-gray-600 font-sans">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-blue font-semibold text-lg font-sans">
            Connects to your existing systems with minimal IT implementation requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
