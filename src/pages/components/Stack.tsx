import React from "react";
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

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "React Native", icon: FaReact, color: "#61DAFB" },
  { id: 3, name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { id: 4, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: 5, name: "PHP", icon: FaPhp, color: "#777BB4" },
  { id: 6, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 7, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 8, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 9, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 10, name: "Firebase", icon: DiFirebase, color: "#FFCA28" },
  { id: 11, name: "Express.js", icon: SiExpress, color: "#000000" },
  { id: 12, name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { id: 13, name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { id: 14, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
];

const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
