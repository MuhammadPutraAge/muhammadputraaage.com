"use client";

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
}

const ResumeContainer = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      {children}
    </motion.div>
  );
};

export default ResumeContainer;
