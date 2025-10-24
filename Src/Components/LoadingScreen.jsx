import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    className="loading-screen"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
    <h1>Nathen is Loading...</h1>
  </motion.div>
);

export default LoadingScreen;
