const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            AI-Based Modeling for Sales & Demand Forecasting
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto">
            Forecast demand across every product and customer combination — and plan your supply chain accordingly.
          </p>

          <button
            onClick={() => {
              const section = document.getElementById("contact-cta");
              const button = document.getElementById("get-started-button");
              if (section) section.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                if (button) button.click();
              }, 600); // small delay to let scroll finish
            }}
            className="inline-block bg-brand-blue hover:bg-brand-darkblue text-white px-8 py-6 text-lg rounded-xl transition-colors text-center"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
