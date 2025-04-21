"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 max-w-[1200px] mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-lg space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+85569786677"
                className="text-lg font-semibold hover:text-white/50 transition duration-300 flex items-center gap-2"
              >
                +855 (0) 69 78 66 77
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:ingchina2004@gmail.com"
                className="text-lg font-semibold hover:text-white/50 transition duration-300 flex items-center gap-2"
              >
                ingchina2004@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Addrss</p>
              <address className="text-xl not-italic leading-relaxed hover:text-white/50 ">
                No. 1, Street 1, Sangkat 1, Khan 1, Siem Reap, Cambodia
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1448.0058028534268!2d103.86682925324845!3d13.379343167973214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31101709b92a8d09%3A0xa7f62e349d6f0175!2seOcambo%20Technology!5e0!3m2!1sen!2skh!4v1745210668213!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
