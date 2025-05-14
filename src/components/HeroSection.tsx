
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Function to scroll to CTA section and trigger the demo button click
  const scrollToCta = () => {
    const ctaSection = document.querySelector('.gradient-bg');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
      
      // Give time for the scroll to complete before attempting to click the button
      setTimeout(() => {
        const demoButton = document.querySelector('.gradient-bg .bg-white') as HTMLButtonElement;
        if (demoButton) {
          demoButton.click();
        }
      }, 1000);
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-blue/10 to-brand-lightblue/10 rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-darkblue/10 to-brand-lightblue/10 rounded-tr-full z-0"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-brand-blue/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-brand-lightblue/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            ATIDOT<span className="text-brand-blue">.ai</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
            Advanced Forecasting Intelligence
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto">
            ATIDOT.ai delivers cutting-edge AI-powered forecasting technology that enhances 
            accuracy, granularity, and efficiency across your entire forecasting process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToCta}
              className="bg-brand-blue hover:bg-brand-darkblue text-white px-8 py-6 text-lg transition-colors"
            >
              Request Demo
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
              <p className="text-gray-600 mt-2">SKU/Client Combinations</p>
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
