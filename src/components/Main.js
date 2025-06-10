
import classes from "./Main.module.css";
import Button from "../UI/Button";
import SocialMedia from "./SocialMedia";
import AppContext from "../store/app-context";
import { useContext } from "react";
import {motion} from "framer-motion";
import { mainPageAnimation } from "../animations/animations";
import myResume from "../assets/pdf/Resume.pdf"
const avatar = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685869729/My%20Portfolio/avatar_qzdpfh.jpg"

const MainPage = () => {
  const appContext = useContext(AppContext);
  return (
    <motion.div
    variants={mainPageAnimation}
    initial={"hidden"}
    animate={"visible"}
    >
      <span className={classes["top-tag"]}>&lt;body&gt;</span>
      <SocialMedia />
      <div className={classes["main-wrapper"]}>
        <div
          className={`${classes["main-text"]} ${
            appContext.theme === "dark" ? classes["dark-animation"] : undefined
          }`}
        >
          <h1>Hi there!</h1>
          <span className={classes["before-name"]}>I am</span>
          <span className={classes.name}>Luka Matovic</span>
        </div>
        <p className={`global-position ${classes.position}`}>Web Developer</p>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <a href={myResume} download className={classes.resume} >
        <Button type="button">Download Resume</Button>
        </a>
        
      </div>
      <span className={classes["bottom-tag"]}>&lt;/body&gt;</span>
    </motion.div>
  );
};

export default MainPage;
