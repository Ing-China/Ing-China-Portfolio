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

const Project = () => {
  return (
    <section id="project">
      <Timeline data={fakeData} />
    </section>
  );
};

export default Project;
