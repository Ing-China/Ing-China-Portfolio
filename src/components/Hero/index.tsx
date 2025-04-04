"use client";
import { useEffect } from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/utils";
import React, { useRef } from "react";
import { beams } from "@/data";
import { CollisionMechanism } from "../ui";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <>
      <motion.section
        ref={parentRef}
        style={{
          backgroundImage,
        }}
        className={cn(
          "min-h-screen place-content-center relative flex items-center w-full justify-center overflow-hidden px-4 py-24 text-gray-200"
        )}
      >
        <div className="z-10 flex flex-col items-center">
          <span className="mb-7 inline-block rounded-lg px-3 py-1.5 text-sm">
            Welcome to my portfolio
          </span>
          <h1 className="text-white/40 text-6xl md:text-7xl font-black text-center">
            Hi, I&apos;m
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

        {beams.map((beam) => (
          <CollisionMechanism
            key={beam.initialX + "beam-idx"}
            beamOptions={beam}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}
      </motion.section>

      <div
        ref={containerRef}
        className="bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </>
  );
};

export default Hero;
