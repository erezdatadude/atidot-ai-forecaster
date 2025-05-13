
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let ATIDOT.ai Show You the Future
          </h2>
          
          <p className="text-xl mb-10">
            Ready to transform your forecasting and take control of your supply chain? 
            Schedule a personalized demo today to see ATIDOT.ai in action with your data.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-blue hover:bg-brand-amber hover:text-white transition-colors px-8 py-6 text-lg">
              Get a Personalized Demo
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              Download Case Study
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-90">
            Join industry leaders who've already improved forecast accuracy by up to 30%
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
