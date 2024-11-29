import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { techStackIconVariants } from "../../animations/framerMotion";

// Technology stack data
export const techStackRow1 = [
  { icon: "devicon-html5-plain colored" },
  { icon: "devicon-css3-plain colored" },
  { icon: "devicon-javascript-plain colored" },
  { icon: "devicon-typescript-plain colored" },
  { icon: "devicon-python-plain colored" },
  { icon: "devicon-react-original colored" },
  { icon: "devicon-nextjs-original" },
];

export const techStackRow2 = [
  { icon: "devicon-nodejs-plain colored" },
  { icon: "devicon-bootstrap-plain colored" },
  { icon: "devicon-tailwindcss-plain colored" },
  { icon: "devicon-firebase-plain colored" },
  { icon: "devicon-mongodb-plain colored" },
  { icon: "devicon-git-plain colored" },
  { icon: "devicon-github-original" },
];

/**
 * TechStackRow Component
 * @param {Object} props
 * @param {Array} props.technologies - Array of technology icons to display
 * @param {string} props.direction - Animation direction ('left' or 'right')
 * @param {boolean} props.titleVisible - Controls animation trigger
 */
export const TechStackRow = ({ technologies, direction, titleVisible }) => {
  const controls = useAnimationControls();

  // Handle infinite sliding animation
  useEffect(() => {
    const animateIcons = async () => {
      if (titleVisible) {
        await controls.start("visible");
        controls.start((i) => ({
          x: direction === "left" ? [0, -100] : [0, 100],
          transition: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        }));
      }
    };

    animateIcons();
  }, [titleVisible, controls, direction]);

  return (
    <div className="flex gap-8 md:gap-12 w-fit">
      {technologies.map((tech, index) => (
        <motion.div
          key={`${tech.icon}-${index}`}
          variants={techStackIconVariants}
          initial="hidden"
          animate={controls}
          custom={{
            index: direction === "left" ? index : technologies.length - 1 - index,
            direction,
          }}
          whileHover="hover"
          className="cursor-pointer nes-pointer"
        >
          <i className={`${tech.icon} text-2xl md:text-3xl`} />
        </motion.div>
      ))}
    </div>
  );
};
