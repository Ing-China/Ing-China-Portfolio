"use client";
import { experiences } from "@/data";
import { animate } from "motion";

import { useScroll, useTransform, motion, useMotionValue } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { LinkPreview } from "../ui";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="px-4 py-32" id="experience">
      <div className="container mx-auto" ref={containerRef}>
        <h2 className="text-6xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent">
          Experience
        </h2>

        <div ref={ref} className="relative max-w-7xl pb-20">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <div className="flex flex-col md:pl-20">
                  <LinkPreview url={item.companyUrl}>
                    <motion.h3
                      className="hidden md:block pb-4 md:text-5xl font-bold"
                      style={{ color: color }}
                    >
                      {item.companyName}
                    </motion.h3>
                  </LinkPreview>

                  <h3 className="hidden md:block md:text-2xl font-bold text-neutral-500">
                    {item.duration}
                  </h3>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <LinkPreview url={item.companyUrl}>
                  <motion.h3
                    className="md:hidden block text-3xl mb-2 text-left font-bold"
                    style={{ color: color }}
                  >
                    {item.companyName}
                  </motion.h3>
                </LinkPreview>
                <h3 className="md:hidden block pb-2 text-xl text-left font-bold text-neutral-500">
                  {item.duration}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
                background: color,
              }}
              className="absolute inset-x-0 top-0 w-[2px] to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
