
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { initEmailJS, sendEmail } from "@/services/emailService";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Sending email with data:", formData);
      const success = await sendEmail({
        ...formData,
        message: "Request for ATIDOT.ai platform demonstration"
      });
      
      if (success) {
        toast({
          title: "Request submitted!",
          description: "We'll get back to you shortly.",
        });
        
        setOpen(false);
        setFormData({ name: "", company: "", email: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to send email",
          description: "Please try again or contact us directly at info@atidot.ai",
        });
      }
    } catch (error) {
      console.error("Detailed error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later or email us directly at info@atidot.ai",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Sales & Demand Forecasting
          </h2>
          
          <p className="text-xl mb-10">
            Request a demonstration of ATIDOT.ai's advanced forecasting technology and discover 
            how our platform can enhance your operational performance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => setOpen(true)}
              className="bg-white text-brand-blue hover:bg-brand-lightblue hover:text-white transition-colors px-8 py-6 text-lg"
            >
              Request Demo
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-90">
            Trusted by leading organizations for superior forecasting performance
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-brand-blue">Request Platform Demonstration</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
            
            <DialogFooter className="mt-6">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue hover:bg-brand-darkblue text-white">
                {isSubmitting ? "Submitting..." : (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Request Demo
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
