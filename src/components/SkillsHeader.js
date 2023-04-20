import classes from "./SkillsHeader.module.css";
import SkillGraph from "./SkillGraph";
import { motion } from "framer-motion";
import { skillHeaderAnimation } from "../animations/animations";

const SkillsHeader = () => {
  return (
    <>
      <motion.div
        variants={skillHeaderAnimation}
        initial={"hidden"}
        animate={"visible"}
        className={`global-skills__header ${classes["skills-header"]}`}
      >
        <h2>What do I do</h2>
        <p className={classes.intro}>
          As a Front-End Developer I am always looking for a modern but also
          intuitive interface that is easy to follow and understand. Beside web
          technologies I also have some experience on the backend, working with
          databases, user authentication and session management{" "}
        </p>
      </motion.div>
      <SkillGraph />
    </>
  );
};

export default SkillsHeader;
