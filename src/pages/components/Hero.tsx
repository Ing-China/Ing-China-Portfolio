import { useEffect } from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200 "
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-7 inline-block rounded-lg px-3 py-1.5 text-sm">
          Welcome to my portfolio
        </span>
        <h1 className="text-white/40 text-6xl md:text-7xl font-black text-center">
          Hi, I'm
        </h1>
        <h1 className="mt-3 max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-6xl md:text-7xl text-center">
          Ung China
        </h1>
        <p className="my-10 max-w-2xl text-center">
          Building impactful web and mobile applications that prioritize both
          innovation and practicality. Dedicated to creating user-centric
          solutions that drive growth and enhance digital experiences.
        </p>
        <motion.button
          style={{ border }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex w-fit items-center gap-2 rounded-lg px-4 py-2 "
        >
          Get in Touch
          <FiArrowRight />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
