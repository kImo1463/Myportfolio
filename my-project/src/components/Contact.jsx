import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
        initial={{ opacity: 0, y: 20 }} // Start off-screen down
        transition={{ duration: 0.5 }} // Animation duration
        className="my-1 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          initial={{ opacity: 0, y: 20 }} // Start off-screen down
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          initial={{ opacity: 0, y: 20 }} // Start off-screen down
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with delay
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          initial={{ opacity: 0, y: 20 }} // Start off-screen down
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration with delay
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;