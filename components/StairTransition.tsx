"use client";

import { AnimatePresence, motion } from "motion/react";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed inset-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        <motion.div
          className="h-screen w-screen fixed bg-primary inset-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
