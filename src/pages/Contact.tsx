
import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ContactFooter from "@/components/ContactFooter";

const Contact = () => {
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
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <ContactFooter />
    </div>
  );
};

export default Contact;
