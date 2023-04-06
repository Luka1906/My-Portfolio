import { Fragment } from "react";
import classes from "./Main.module.css";
import avatar from "../assets/images/avatar.jpeg";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

const MainPage = () => {
  return (
    <Fragment>
      <span className={classes["top-tag"]}>&lt;body&gt;</span>
      <SocialMedia />
      <div className={classes["main-wrapper"]}>
        <div className={classes["main-text"]}>
          <h1>Hi there!</h1>
          <span className={classes["before-name"]}>I am</span>
          <span className={classes.name}>Luka Matovic</span>
          <h1>Web Developer</h1>
        </div>
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
