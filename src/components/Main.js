import { Fragment } from "react";
import classes from "./Main.module.css";
import avatar from "../assets/images/avatar.jpeg";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import AppContext from "../store/app-context";
import { useContext } from "react";

const MainPage = () => {
  const appContext = useContext(AppContext);
  return (
    <Fragment>
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
        <p className={classes.position}>Web Developer</p>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <Button type="button">Download Resume</Button>
      </div>
      <span className={classes["bottom-tag"]}>&lt;/body&gt;</span>
    </Fragment>
  );
};

export default MainPage;
