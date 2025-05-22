const CTASection = () => {
  return (
    <section className="bg-gray-50 text-center py-20 px-6">
      <h2 className="text-3xl font-semibold text-gray-900">
        Ready to see how accurate forecasting can transform your operations?
      </h2>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Book a personalized walkthrough or start a free pilot today.
      </p>
      <a
        href="/contact"
        className="inline-block mt-8 bg-[#1F4B99] text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-800 transition"
      >
        Get Started
      </a>
    </section>
  );
};

export default CTASection;
