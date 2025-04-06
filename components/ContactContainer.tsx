'use client';

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
}

const ContactContainer = ({ children }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      {children}
    </motion.section>
  );
};

export default ContactContainer;
