import { cn } from "@/lib/utils";
import { animate, useMotionValue, useMotionTemplate } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaGooglePlay, FaApple } from "react-icons/fa";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    github?: string;
    playStore?: string;
    appStore?: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundColor = useMotionTemplate`${color}`;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-1 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                style={{ backgroundColor }}
              />
            )}
          </AnimatePresence>

          <Card>
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex gap-4 mt-4 text-white text-xl">
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-gray-400 transition" />
                </a>
              )}
              {item.playStore && (
                <a
                  href={item.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay className="hover:text-gray-400 transition" />
                </a>
              )}
              {item.appStore && (
                <a
                  href={item.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple className="hover:text-gray-400 transition" />
                </a>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-neutral-600 tracking-wide leading-relaxed text-sm mt-4",
        className
      )}
    >
      {children}
    </p>
  );
};
