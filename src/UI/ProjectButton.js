import classes from "./ProjectButton.module.css";
import { motion } from "framer-motion";
import { buttonAnimation } from "../animations/animations";
import { AnimatePresence } from "framer-motion";
const ProjectButton = (props) => {
  return (
    <motion.button
      variants={buttonAnimation}
      initial={"hidden"}
      animate={"visible"}
      whileHover={"buttonHover"}
      className={classes.button}
      type={props.type || "submit"}
      onClick={props.onClose}
    >
      {props.children}
    </motion.button>
  );
};

export default ProjectButton;
