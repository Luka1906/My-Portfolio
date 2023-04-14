
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import { buttonAnimation} from "../animations/animations";
const Button = (props) => {
  return (
    <motion.button
      variants={buttonAnimation}
      initial={"hidden"}
      animate={"visible"}
      whileHover={"buttonHover"}
      className={classes.button}
      type={props.type || "submit"}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
