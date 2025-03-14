import {
  About,
  Contact,
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
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
