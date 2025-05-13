
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-brand-blue">
            Meet Our Team
          </h1>
          
          <div className="max-w-6xl mx-auto mb-20 text-center">
            <p className="text-xl text-gray-700">
              We're a group of experienced data scientists and analytics leaders passionate about solving complex forecasting challenges with AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Team member cards */}
            <div className="relative">
              <Card className="overflow-hidden h-full bg-gray-900 text-white">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-6">Erez Ben-Moshe</h2>
                  
                  <div className="space-y-4">
                    <p>
                      Erez is an experienced data analytics leader with over a decade of marketing and data analysis expertise at top global corporations including Yahoo, Coca-Cola, Visa, and Strauss.
                    </p>
                    
                    <p>
                      He teaches data science and machine learning courses in the MBA program at Reichman University, imparting key data skills to the next generation of business leaders and innovators.
                    </p>
                    
                    <p>
                      Erez holds an MBA focused on data analytics from the University of British Columbia in Canada as well as a B.Sc. in Industrial Engineering from Ben Gurion University in Israel.
                    </p>
                    
                    <p>
                      His diverse educational background combines business savvy with analytical rigor and technical prowess.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden h-full bg-gray-900 text-white">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-6">Nati Shimoni</h2>
                  
                  <div className="space-y-4">
                    <p>
                      Nati is an accomplished data science leader with over a decade of experience building and managing high-impact teams of data scientists and analysts.
                    </p>
                    
                    <p>
                      He teaches deep learning at Ben Gurion University and mentors startups in Google's Launchpad accelerator, staying on the cutting edge of analytical innovations.
                    </p>
                    
                    <p>
                      Nati holds an MBA and BA in Economics from Ben Gurion University, combining business administration savvy with analytical rigor.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <AspectRatio ratio={16/9} className="bg-gray-900 rounded-lg overflow-hidden max-w-2xl mx-auto">
              <img 
                src="public/lovable-uploads/6763d8b1-49ed-4965-aea4-7f6f0524249c.png"
                alt="ATIDOT.ai Team" 
                className="object-contain"
              />
            </AspectRatio>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-brand-blue hover:bg-brand-teal text-white px-8 py-6 text-lg transition-colors"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">ATIDOT.ai</h3>
              <p className="text-gray-400">The Future of Forecasting Starts Now</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 ATIDOT.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
