import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const openCertificate = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in
            initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggering effect
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}

              {/* Button for viewing the certificate, if URL exists */}
              {experience.certificateUrl && (
                <button
                  onClick={() => openCertificate(experience.certificateUrl)}
                  className="mt-4 mb-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                  View Certificate
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;