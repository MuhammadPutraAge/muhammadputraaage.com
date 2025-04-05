"use client";

import { SERVICES } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const ServiceList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-16"
    >
      {SERVICES.map((service) => (
        <div
          key={service.num}
          className="flex-1 flex flex-col justify-center gap-6 group"
        >
          <div className="w-full flex justify-between items-center">
            <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
              {service.num}
            </p>
            <Link
              href={service.href}
              className="size-14 rounded-full group-hover:bg-accent transition-all duration-500 bg-white flex justify-center items-center hover:-rotate-45"
            >
              <BsArrowDownRight className="text-primary text-2xl" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
            {service.title}
          </h2>
          <p className="text-white/60">{service.description}</p>

          <div className="border-b border-white/20 w-full" />
        </div>
      ))}
    </motion.div>
  );
};

export default ServiceList;
