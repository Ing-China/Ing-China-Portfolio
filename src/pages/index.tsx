import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Project,
  Stack,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
