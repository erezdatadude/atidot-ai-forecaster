
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="demo-video" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
            See It in Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Watch the Demo
          </h2>
          <p className="text-xl text-gray-500">
            A 20-minute walkthrough of Atidot.ai — from data ingestion to forecast delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/*
            VIDEO EMBED PLACEHOLDER
            Replace the div below with your actual video embed.

            For YouTube:
            <iframe
              className="w-full aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            For Vimeo:
            <iframe
              className="w-full aspect-video rounded-2xl"
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

            For self-hosted:
            <video
              className="w-full aspect-video rounded-2xl"
              controls
              poster="/video-thumbnail.jpg"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
          */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-blue2 flex items-center justify-center relative cursor-pointer group">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-xl font-bold text-white mb-1">Atidot.ai Product Demo</p>
                <p className="text-blue-200 text-sm">20 min · Narrated walkthrough</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-4">
            Replace this placeholder with your video embed (YouTube, Vimeo, or self-hosted)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
