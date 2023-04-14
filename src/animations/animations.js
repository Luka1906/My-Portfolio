import { easeInOut } from "framer-motion";

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vh",
    scale: 0.3,
  },
};
export const animationThree = {
  in: {
    opacity: 1,
    x: -500,
  },
  out: {
    opacity: 0,
    x: 400,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const buttonAnimation = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
    // x: 0,
    // transition: {
    //   type: "spring",
    //   stiffness: 120,
    //   delay: 0.3,
    // },
  },
  buttonHover: {
    backgroundPosition: "center",
    scale: 1.1,
  },
};

export const navBarAnimation = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};
export const linksHoverAnimation = {
  linkHover: {
    originX: 0,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
};

export const transition = {
  duration: 0.5,
};


export const socialMediaAnimation = {
  hover: {
    scale: 1.3,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.25,
    },
  },
};

export const exitAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
  },
};


  
  




