import React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useMotionTemplate,
} from "framer-motion";
import { abouts } from "@/data";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const About = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  const color = useMotionValue(COLORS_TOP[0]);

  React.useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const colorGradient = useMotionTemplate`${color}`;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="px-4 py-32 text-white glass"
      id="about"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl mb-12 bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {abouts.map((about, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.4,
                  type: "spring",
                }}
                style={{
                  color: colorGradient,
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
                // className="text-5xl font-semibold"
              >
                {about.value}
              </motion.h3>

              <motion.p
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.4,
                }}
                className="text-xl font-semibold mb-2"
              >
                {about.label}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: 1 + index * 0.1,
                  duration: 0.4,
                }}
                className="text-gray-400"
              >
                {about.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
