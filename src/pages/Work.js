import { animationThree, transition } from "../animations/animations";
import { useState } from "react";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

const WorkPage = () => {


  return (
    <motion.div
      initial="out"
      animate="end"
      variants={animationThree}
      transition={transition}
    
    >
      {<Projects />}
    </motion.div>
  );
};

export default WorkPage;
