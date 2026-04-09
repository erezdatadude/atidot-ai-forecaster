
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { initEmailJS, sendEmail } from "@/services/emailService";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendEmail(formData);
      if (success) {
        toast({
          title: "Message sent!",
          description: "We'll be in touch within 24 hours.",
        });
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or email us directly at info@atidot.ai",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at info@atidot.ai",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10 max-w-lg w-full mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Demo</h3>
        <p className="text-gray-500 text-sm">
          See how AI-powered forecasting can transform your demand planning.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-11 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Manufacturing"
            value={formData.company}
            onChange={handleChange}
            required
            className="h-11 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Work Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-11 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            Message <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your forecasting needs..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="rounded-lg resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-brand-blue hover:bg-brand-darkblue text-white font-semibold rounded-lg transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
