import { animate } from "motion";
import { Timeline } from "../UI/TimeLine";
const fakeData = [
  {
    title: "Started Learning React",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        I began my journey into React, exploring components, state, and props.
      </p>
    ),
  },
  {
    title: "Built My First App",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        Created a simple to-do app to solidify my understanding of React
        concepts.
      </p>
    ),
  },
  {
    title: "Dove into React Native",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        Started building mobile apps with React Native, working on UI and
        navigation.
      </p>
    ),
  },
  {
    title: "Explored Animations",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        Implemented smooth animations using Framer Motion and Reanimated.
      </p>
    ),
  },
];

import { useScroll, useTransform, motion, useMotionValue } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

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
          {fakeData.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-5 left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
                background: color, // Use animated color here
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
