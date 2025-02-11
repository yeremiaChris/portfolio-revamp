"use client";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const Star = () => {
  return (
    <motion.div
      className="absolute bottom-5 right-5 hidden md:block md:right-14"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <Logo />
    </motion.div>
  );
};
