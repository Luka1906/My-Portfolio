import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Projects.module.css";
import image1 from "../assets/images/project1.jpg";
import image2 from "../assets/images/project2.jpg";
import image3 from "../assets/images/project3.jpg";
import image4 from "../assets/images/project2.jpg";

const Projects = () => {
  return (
    <div className={classes["projects-wrapper"]}>
      <h2>Projects Gallery</h2>
      <div className={classes.projects}>
        <div className={classes["project-container"]}>
          <div className={classes["project-content"]}>
            <div
              className={`${classes["projects-overlay"]} ${classes["project__overlay--blur"]}`}
            >
              <img src={image1} alt="project1" />
            </div>

            <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
            <p>
              App that helps users to choose, save item in the cart and order it
              made with React and Firebase{" "}
            </p>
          </div>
          <div className={classes["play-icons"]}>
            <span>Github</span>{" "}
            <a href="https://github.com/Luka1906/Food-App.git" target="blank">
              <FontAwesomeIcon className={classes.github} icon={faGithub} />
            </a>
            <span>Live Demo</span>{" "}
            <a>
              <FontAwesomeIcon
                className={classes["play-icon"]}
                icon={faCirclePlay}
              />
            </a>
          </div>
        </div>
        <div className={classes["project-container"]}>
          <div className={classes["project-content"]}>
            <div
              className={`${classes["projects-overlay"]} ${classes["project__overlay--blur"]}`}
            >
              <img src={image2} alt="project2" />
            </div>
            <div className={classes["box2-content"]}>
              <FontAwesomeIcon
                className={classes["react-icon"]}
                icon={faReact}
              />
              <FontAwesomeIcon
                className={classes["react-node"]}
                icon={faNodeJs}
              />
            </div>
          </div>
          <div className={classes["play-icons"]}>
            <span>Github</span>{" "}
            <a>
              <FontAwesomeIcon className={classes.github} icon={faGithub} />
            </a>
            <span>Live Demo</span>
            <a>
              <FontAwesomeIcon
                className={classes["play-icon"]}
                icon={faCirclePlay}
              />
            </a>
          </div>
        </div>
        <div className={classes["project-container"]}>
          <div className={classes["project-content"]}>
            <div
              className={`${classes["projects-overlay"]} ${classes["project__overlay--blur"]}`}
            >
              <img src={image3} alt="project3" />
            </div>
            <div className={classes["box3-content"]}>
              <FontAwesomeIcon
                className={classes["react-js"]}
                icon={faJsSquare}
              />

              <FontAwesomeIcon
                className={classes["react-node"]}
                icon={faNodeJs}
              />
            </div>
            <p>
              Chat room made with a Socket.io, EJS Template Engine and Vanilla
              JavaScript. It enables users to message each other if they chose
              the same chatoom
            </p>
          </div>
          <div className={classes["play-icons"]}>
            <span>Github</span>{" "}
            <a
              href="https://github.com/Luka1906/Chat-simulation.git"
              target="blank"
            >
              <FontAwesomeIcon className={classes.github} icon={faGithub} />
            </a>
            <span>Live Demo</span>{" "}
            <a>
              <FontAwesomeIcon
                className={classes["play-icon"]}
                icon={faCirclePlay}
              />
            </a>
          </div>
        </div>
        <div className={classes["project-container"]}>
          <div className={classes["project-content"]}>
            <div
              className={`${classes["projects-overlay"]} ${classes["project__overlay--blur"]}`}
            >
              <img src={image4} alt="project4" />
            </div>
            <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
            <p>
              Expenses App that helps users to see at what month they spent the
              most money made in React
            </p>
          </div>
          <div className={classes["play-icons"]}>
            <span>Github</span>{" "}
            <a
              href="https://github.com/Luka1906/Simple-Expenses-App.git"
              target="blank"
            >
              <FontAwesomeIcon className={classes.github} icon={faGithub} />
            </a>
            <span>Live Demo</span>
            <a>
              <FontAwesomeIcon
                className={classes["play-icon"]}
                icon={faCirclePlay}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
