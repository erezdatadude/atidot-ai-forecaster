
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    name: "Erez Ben-Moshe",
    role: "Co-Founder",
    bio: [
      "Experienced data analytics leader with over a decade of marketing and data analysis expertise at top global corporations including Yahoo, Coca-Cola, Visa, and Strauss.",
      "Teaches data science and machine learning courses in the MBA program at Reichman University, imparting key data skills to the next generation of business leaders.",
    ],
    education: "MBA (Data Analytics), University of British Columbia; B.Sc. Industrial Engineering, Ben Gurion University",
  },
  {
    name: "Nati Shimoni",
    role: "Co-Founder",
    bio: [
      "Accomplished data science leader with over a decade of experience building and managing high-impact teams of data scientists and analysts.",
      "Teaches deep learning at Ben Gurion University and mentors startups in Google's Launchpad accelerator, staying on the cutting edge of analytical innovation.",
    ],
    education: "MBA & BA Economics, Ben Gurion University",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Built by Data Scientists, for Industry
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Atidot.ai is a product of{" "}
              <a
                href="https://datadudes.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline font-medium"
              >
                DataDudes
              </a>
              , a team of experienced data scientists and analytics leaders who
              believe AI should make demand planning simpler, faster, and more
              accurate for every manufacturer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <span className="text-brand-blue font-medium text-sm">{member.role}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {member.bio.map((paragraph, j) => (
                    <p key={j} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500">{member.education}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-darkblue transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
