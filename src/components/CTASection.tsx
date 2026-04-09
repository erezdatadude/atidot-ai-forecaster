
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-blue2 rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to See It<br />in Action?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Book a personalized demo with our team.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-darkblue text-lg font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              Book Your Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
