import { duration } from "@mui/material";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
const Button = (props) => {
  return (
    <motion.button
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      whileHover={{ backgroundPosition:"center", scale: 1.05}}
      className={classes.button}
      type={props.type || "submit"}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
