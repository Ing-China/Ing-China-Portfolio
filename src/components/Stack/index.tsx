import React from "react";
import { motion } from "framer-motion";
import { stackItems1, stackItems2 } from "@/data";

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
                <div className="mb-4 bg-white/10 p-6 rounded-lg">
                  {React.createElement(item.icon, {
                    className: "w-24 h-24",
                    style: { color: item.color },
                  })}
                </div>
                <p className="text-white font-semibold">{item.name}</p>
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
                <div className="mb-4 bg-white/10 p-6 rounded-lg">
                  {React.createElement(item.icon, {
                    className: "w-24 h-24",
                    style: { color: item.color },
                  })}
                </div>
                <p className="text-white font-semibold">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
