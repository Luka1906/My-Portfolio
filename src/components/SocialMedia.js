import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import classes from "./SocialMedia.module.css";
import { motion } from "framer-motion";
import { socialMediaAnimation } from "../animations/animations";

const SocialMedia = () => {
  const iconSX = {
    color: "var(--color-light-primary-400)",
    fontSize: 18,
    "&:hover": {
      color: "var(--color-light-primary-300)",
    },
  };
  return (
    <div className={classes["social-media"]}>
      <motion.a
        variants={socialMediaAnimation}
        whileHover={"hover"}
        href="https://www.linkedin.com/in/michael-m-5940b8235/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <LinkedInIcon className={classes.linkedin} sx={iconSX} />
      </motion.a>
      <motion.a
        variants={socialMediaAnimation}
        whileHover={"hover"}
        href="https://github.com/Luka1906"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <GitHubIcon className={classes.github} sx={iconSX} />{" "}
      </motion.a>
      <motion.a
        variants={socialMediaAnimation}
        whileHover={"hover"}
        href="https://www.instagram.com/lu.matovic/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <InstagramIcon className={classes.instagram} sx={iconSX} />
      </motion.a>
    </div>
  );
};
export default SocialMedia;
