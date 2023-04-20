import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialMedia.module.css";
import { motion } from "framer-motion";
import { bouncingAnimation } from "../animations/animations";

const SocialMedia = () => {
  return (
    <div className={classes["social-media"]}>
      <motion.a
        variants={bouncingAnimation}
        whileHover={"hover"}
        href="https://www.linkedin.com/in/michael-m-5940b8235/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon
          className={` global-linkedin ${classes.linkedin}`}
          icon={faLinkedin}
        />
      </motion.a>
      <motion.a
        variants={bouncingAnimation}
        whileHover={"hover"}
        href="https://github.com/Luka1906"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon
          className={`global-github ${classes.github}`}
          icon={faGithub}
        />{" "}
      </motion.a>
      <motion.a
        variants={bouncingAnimation}
        whileHover={"hover"}
        href="https://www.instagram.com/lu.matovic/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon
          className={`global-instagram ${classes.instagram}`}
          icon={faInstagram}
        />
      </motion.a>
    </div>
  );
};
export default SocialMedia;
