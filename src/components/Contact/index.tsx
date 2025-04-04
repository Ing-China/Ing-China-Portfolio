"use client";

import { Lanyard } from "../ui";

const Contact = () => {
  return (
    <section id="contact">
      <div className="h-screen">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </section>
  );
};

export default Contact;
