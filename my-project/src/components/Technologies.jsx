import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAngular, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  animate: (index) => ({
    y: [0, -10, 0], // Move up by 10px and then back down
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity, // Repeat indefinitely
      repeatType: "loop", // Loop the animation
      delay: index * 0.2, // Delay based on index to stagger the animation
    },
  }),
};

const Technologies = () => {
  const icons = [
    { component: <RiReactjsLine className="text-7xl text-cyan-400" />, id: 1 },
    { component: <TbBrandNextjs className="text-7xl" />, id: 2 },
    { component: <BiLogoPostgresql className="text-7xl text-sky-700" />, id: 3 },
    { component: <SiAngular className="text-7xl text-green-500" />, id: 4 },
    { component: <SiDjango className="text-7xl text-cyan-400" />, id: 5 },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1> {/* Static header */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.id}
            variants={iconVariants}
            animate="animate"
            custom={index} // Pass the index as a custom prop
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {icon.component}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;