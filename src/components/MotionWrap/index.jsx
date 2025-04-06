import React from "react";
import { motion } from "framer-motion";

const MotionWrap = ({ children }) => {
  return (
    <motion.div
      className="content"
      initial={{ y: 50, opacity: 0 }} // Start position
      whileInView={{ y: 0, opacity: 1 }} // Animate when in view
      transition={{ duration: 0.5, ease: "linear" }}
      viewport={{ once: false }} // Runs only once when it enters the viewport
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
