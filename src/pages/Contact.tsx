
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you'd send this data to a backend service
      // Here we just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email to erez@dataDudes.ai
      console.log("Demo request submitted:", {
        to: "erez@dataDudes.ai",
        subject: "Contact Request from ATIDOT.ai website",
        body: `
          Name: ${formData.name}
          Company: ${formData.company}
          Email: ${formData.email}
        `
      });
      
      toast({
        title: "Request submitted!",
        description: "We'll get back to you shortly.",
      });
      
      setFormData({ name: "", company: "", email: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-brand-blue">
            Contact Us
          </h1>
          
          <div className="max-w-xl mx-auto mb-10 text-center">
            <p className="text-xl text-gray-700">
              Ready to transform your sales and demand forecasting capabilities? We're here to help.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">Get a Personalized Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue hover:bg-brand-teal text-white">
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Request Demo
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Or email us directly at: <a href="mailto:erez@dataDudes.ai" className="text-brand-blue hover:underline">erez@dataDudes.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">ATIDOT.ai</h3>
              <p className="text-gray-400">AI-Based Sales & Demand Forecasting</p>
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:erez@dataDudes.ai" className="text-gray-400 hover:text-white transition-colors">Email: erez@dataDudes.ai</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Form</a></li>
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

export default Contact;
