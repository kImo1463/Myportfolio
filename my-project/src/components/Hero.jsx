import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/Abdi.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Adjust stagger time here
  },
};

const item = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={item(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Abdulhakim Obsina
            </motion.h1>

            <motion.span
              variants={item(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FullStack Developer
            </motion.span>

            <motion.p
              variants={item(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilepic}
            alt="Abdi pic"
            className="rounded-full" // Use rounded-full for a circular image
            style={{
              width: '50%', // Decrease image size to 50% of the container
              maxWidth: '300px', // Set max width to prevent excessive size
              height: 'auto', // Maintain aspect ratio
              filter: 'brightness(1.1) contrast(1.2) saturate(1.1)', // Adjust brightness, contrast, and saturation
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;