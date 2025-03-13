import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiFirebase } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const stackItems1 = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "React Native", icon: FaReact, color: "#61DAFB" },
  { id: 3, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 4, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: 5, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 6, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { id: 7, name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { id: 8, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 9, name: "Express.js", icon: SiExpress, color: "#000000" },
  { id: 10, name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { id: 11, name: "PHP", icon: FaPhp, color: "#777BB4" },
  { id: 12, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 13, name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { id: 14, name: "Firebase", icon: DiFirebase, color: "#FFCA28" },
];
const stackItems2 = [
  { id: 1, name: "Firebase", icon: DiFirebase, color: "#FFCA28" },
  { id: 2, name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { id: 3, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 4, name: "PHP", icon: FaPhp, color: "#777BB4" },
  { id: 5, name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { id: 6, name: "Express.js", icon: SiExpress, color: "#000000" },
  { id: 7, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 8, name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { id: 9, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { id: 10, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 11, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: 12, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 13, name: "React Native", icon: FaReact, color: "#61DAFB" },
  { id: 14, name: "React", icon: FaReact, color: "#61DAFB" },
];

const Stack = () => {
  return (
    <section className="px-4 py-32 glass" id="stack">
      <div className="container mx-auto">
        <h2 className="text-6xl mb-12 bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent">
          My Stack
        </h2>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-8 flex-none"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {stackItems1.map((item, index) => (
              <div
                key={`left-${index}`}
                className="flex items-center justify-center flex-col rounded-xl p-4"
              >
                <div className="mb-4 bg-white/10 p-6 rounded-xl">
                  {React.createElement(item.icon, {
                    className: "w-24 h-24",
                    style: { color: item.color },
                  })}
                </div>
                <p className="text-gray-400 font-semibold">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden mt-8 [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-8 flex-none"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {stackItems2.map((item, index) => (
              <div
                key={`right-${index}`}
                className="flex items-center justify-center flex-col rounded-xl p-4"
              >
                <div className="mb-4 bg-white/10 p-6 rounded-xl">
                  {React.createElement(item.icon, {
                    className: "w-24 h-24",
                    style: { color: item.color },
                  })}
                </div>
                <p className="text-gray-400 font-semibold">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
