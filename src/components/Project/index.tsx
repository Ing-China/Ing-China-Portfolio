"use client";
import { HoverEffect } from "../ui";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Project = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <section className="px-4 py-32 bg-black" id="project">
      <div className="container mx-auto">
        <h2 className="text-6xl pb-12 bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent">
          Project
        </h2>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Project;

export const projects = [
  {
    title: "The Sneakers Shop",
    description:
      "The Sneakers Shop is your go-to online store for trendy and high-quality sneakers. Whether you're into casual or athletic footwear, we’ve got you covered with a wide selection of styles and sizes to match your personality and lifestyle.",
    github: "...",
    playStore: "...",
    appStore: "...",
    image: "/assets/project.png",
  },
  {
    title: "Phsar Niseth Khmer",
    description:
      "Phsar Niseth Khmer is your local online marketplace for fresh and affordable vegetables. We bring you the best of Cambodia’s farm-to-table produce, delivering top-quality vegetables directly to your door for a healthier and more sustainable lifestyle.",
    github: "...",
    playStore: "...",
    appStore: "...",
    image: "/assets/project.png",
  },
  {
    title: "SP Mobile",
    description:
      "SP Mobile is the ultimate kitchen mart, offering a variety of products designed to make your cooking experience easier and more efficient. From essential utensils to advanced gadgets, we have everything you need to elevate your kitchen.",
    github: "...",
    playStore: "...",
    appStore: "...",
    image: "/assets/project.png",
  },
  {
    title: "Budgit",
    description:
      "Budgit is the perfect app to help you manage your finances. Track your income, expenses, and budgets with ease, and get detailed reports to stay on top of your financial goals. Whether you're saving for something special or just keeping track of everyday spending, Budgit makes it simple.",
    github: "...",
    playStore: "...",
    appStore: "...",
    image: "/assets/project.png",
  },
];
