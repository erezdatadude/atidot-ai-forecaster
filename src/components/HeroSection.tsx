
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-amber/10 to-brand-teal/10 rounded-tr-full z-0"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-brand-teal/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-brand-amber/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            ATIDOT<span className="text-brand-teal">.ai</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
            The Future of Forecasting Starts Now
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto">
            ATIDOT.ai delivers next-generation AI-powered demand forecasts—real-time, granular, and built for scale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-brand-blue hover:bg-brand-teal text-white px-8 py-6 text-lg transition-colors">
              Get a Personalized Demo
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4 rounded-lg bg-white shadow-md">
              <p className="font-bold text-3xl text-brand-blue">30%+</p>
              <p className="text-gray-600 mt-2">Improved Forecast Accuracy</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <p className="font-bold text-3xl text-brand-blue">52</p>
              <p className="text-gray-600 mt-2">Weeks of Rolling Forecasts</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <p className="font-bold text-3xl text-brand-blue">10k+</p>
              <p className="text-gray-600 mt-2">SKU Combinations</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <p className="font-bold text-3xl text-brand-blue">24/7</p>
              <p className="text-gray-600 mt-2">Real-time Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
