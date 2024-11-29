// Animation timing constants
const PAGE_ANIMATION_DELAYS = {
  TITLE: 0.2,
  CONTENT: 0.5,
  SECONDARY: 0.8
};

// Common spring configuration
const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 10
};

// Basic container animations
export const containerVariants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: SPRING_TRANSITION
  }
};

// Directional animations
export const leftToRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      ...SPRING_TRANSITION,
      mass: 1,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const rightToLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      ...SPRING_TRANSITION,
      mass: 1,
      staggerChildren: 0.1
    }
  }
};

// Modal animations
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Tech stack animations
export const techStackIconVariants = {
  hidden: { 
    opacity: 0,
    scale: 0,
    x: (custom) => custom.direction === 'left' ? -50 : 50
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: custom.index * 0.1,
      ease: "easeOut"
    }
  }),
  floating: (direction) => ({
    x: direction === 'left' ? [0, -100] : [0, 100],
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }
  }),
  hover: {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Page animations
export const pageTitleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: PAGE_ANIMATION_DELAYS.TITLE
    }
  }
};

export const pageContentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delay: PAGE_ANIMATION_DELAYS.CONTENT,
      staggerChildren: 0.2
    }
  }
};

// About page animations
export const aboutBioTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay }
  })
};

export const aboutTechStackHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2.0
    }
  }
};

// Project animations
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: "easeOut"
    }
  }
};

export const projectButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: PAGE_ANIMATION_DELAYS.SECONDARY + 0.75
    }
  }
};

// Contact page animations
export const contactSpriteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: PAGE_ANIMATION_DELAYS.CONTENT
    }
  }
};

export const contactFormVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: PAGE_ANIMATION_DELAYS.SECONDARY,
      staggerChildren: 0.1
    }
  }
};

export const contactButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: PAGE_ANIMATION_DELAYS.SECONDARY + 0.5
    }
  }
};
