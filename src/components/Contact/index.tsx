"use client";

import { Lanyard } from "../ui";

const Contact = () => {
  return (
    <section className="px-4 py-32" id="contact">
      <div className="flex justify-center items-center">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </section>
  );
};

export default Contact;
