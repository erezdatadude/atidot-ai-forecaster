
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { initEmailJS, sendEmail } from "@/services/emailService";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Contact form - sending email with data:", formData);
      const success = await sendEmail(formData);
      
      if (success) {
        toast({
          title: "Request submitted!",
          description: "We'll get back to you shortly.",
        });
        
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to send email",
          description: "Please try again or contact us directly at info@atidot.ai",
        });
      }
    } catch (error) {
      console.error("Contact form detailed error:", error);
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
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Tell us more about your needs..."
                rows={4}
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
          Or email us directly at: <a href="mailto:info@atidot.ai" className="text-brand-blue hover:underline">info@atidot.ai</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
