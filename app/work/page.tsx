"use client";

import { PROJECTS } from "@/constants";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const Work = () => {
  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex;
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="wrapper w-full">
        <div className="flex flex-col xl:flex-row xl:gap-7">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-7 h-[50%]">
              <p className="text-7xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </p>

              <h2 className="text-3xl font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-1 xl:gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={item.name}
                    className="text-sm xl:text-lg text-accent"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              loop
              onSlideChange={handleSlideChange}
            >
              {PROJECTS.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                    <div className="absolute inset-0 size-full bg-black/10 z-10" />
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderButton
                containerClassName="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between px-2 xl:px-0 xl:w-max xl:justify-none"
                btnClassName="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
