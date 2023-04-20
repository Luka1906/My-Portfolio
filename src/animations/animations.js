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
      delay: 0.6,
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

export const bouncingAnimation = {
  hover: {
    scale: 1.4,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.25,
    },
  },
};

export const formAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export const mapAnimation = {
  hidden: {
    opacity: 0,
    x: 350,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
   
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const skillHeaderAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const skillAnimation = {
  hidden1: {
    opacity: 0,
    x: -150,
  },
  visible1: {
    opacity: 1,
    x: -50,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: "easeOut",
    },
  },
  hidden2: {
    opacity: 0,
    x: 150,
  },
  visible2: {
    opacity: 1,
    x: 50,
    transition: {
      duration: 0.8,
      delay: 1.1,
      ease: "easeOut",
    },
  },
  hidden3: {
    opacity: 0,
    x: -150,
  },
  visible3: {
    opacity: 1,
    x: -50,
    transition: {
      duration: 0.8,
      delay: 1.6,
      ease: "easeOut",
    },
  },
  hidden4: {
    opacity: 0,
    x: 150,
  },
  visible4: {
    opacity: 1,
    x: 50,
    transition: {
      duration: 0.8,
      delay: 2.1,
      ease: "easeOut",
    },
  },
};

export const projectModalAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const infoAnimation = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      delay: 1.1,
    },
  },
};

export const mainPageAnimation = {
  hidden: {
    opacity: 0,
    scale:0.7
 
  },
  visible: {
    opacity:1,
    scale:1,
 
    transition: {
      duration:0.3
    }
  }
}

export const submissionBackdropAnimation = {
  visible: {opacity: 1},
  hidden: {opacity: 0}
}

export const submissionModalAnimation = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "-7em",
    x: "2.5rem",
    opacity:1,
  }
}

