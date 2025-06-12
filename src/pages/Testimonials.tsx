import React from "react";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white neon-glow">
          Our Success Stories <br /> Are Coming Soon
        </h1>
        <p className="text-lg text-gray-400 mt-6">
          Stay tuned to be inspired by our students' journeys!
        </p>
      </motion.div>
    </div>
  );
};

export default Testimonials;