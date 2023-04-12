
import AboutMe from "../components/AboutMe";
import CubeAnimation from "../components/CubeAnimation";
import classes from './About.module.css'
import {motion} from 'framer-motion';
import { animationTwo, transition } from "../animations/animations";
const AboutPage = () => {
  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationTwo}
    transition={transition}
    >
  <div className={classes['about-page']}>
     <AboutMe/>
      <CubeAnimation />
  </div>
  </motion.div>
 
  );
};

export default AboutPage;
