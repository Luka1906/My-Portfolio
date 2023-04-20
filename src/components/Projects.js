import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Projects.module.css";
import image1 from "..//assets/images/project1.jpg";
import image2 from "..//assets/images/project3.jpg";
import image3 from "..//assets/images/project3.jpg";
import image4 from "..//assets/images/project4.jpg";

import { motion } from "framer-motion";
import { bouncingAnimation } from "../animations/animations";

import { navBarAnimation } from "../animations/animations";

import { useContext } from "react";
import ProjectContext from "../store/project-context";
import Project from "./Project";

const Projects = () => {

  const projectContext = useContext(ProjectContext);

  const PROJECT_DATA = [
    {
      id: Math.floor(Math.random() * 1000),
      image: image1,
      text:
        " Simulation of the food app made in React that helps user to choose,save and order the food from the menu",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Food-App.git",
      react: (
        <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
      ),
      onShow: projectContext.project1OnShow,
      onClose: projectContext.project1OnClose,
      project: projectContext.project1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      image: image2,
      text:
        " Chat app made with Socket.io, EJS and Vanilla JavaScript. It enables users to message each other if they chose the same chatroom.",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Chat-simulation.git",
      react: (
        <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
      ),
      node: (
        <FontAwesomeIcon className={classes["react-node"]} icon={faNodeJs} />
      ),
      onShow: projectContext.project2OnShow,
      onClose: projectContext.project2OnClose,
      project: projectContext.project2,
    },
    {
      id: Math.floor(Math.random() * 1000),
      image: image3,
      text:
        " Simulation of the food app made in React that helps user to choose,save and order the food from the menu",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Chat-simulation.git",
      javaScript: (
        <FontAwesomeIcon className={classes["react-js"]} icon={faJsSquare} />
      ),
      node: (
        <FontAwesomeIcon className={classes["react-node"]} icon={faNodeJs} />
      ),
      onShow: projectContext.project3OnShow,
      onClose: projectContext.project3OnClose,
      project: projectContext.project3,
    },
    {
      id: Math.floor(Math.random() * 1000),
      image: image4,
      text:
        "  Expenses App made in React that allows users to enter their expenses and dynamically shows how much money they spent in each month",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Simple-Expenses-App.git",
      react: (
        <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
      ),
      onShow: projectContext.project4OnShow,
      onClose: projectContext.project4OnClose,
      project: projectContext.project4,
    },
  ];

  return (
    <div className={`global-project__wrapper ${classes["projects-wrapper"]}`}>
      <motion.h2
        variants={navBarAnimation}
        initial={"hidden"}
        animate={"visible"}
      >
        Project Gallery
      </motion.h2>
      <div className={classes.projects}>
        {PROJECT_DATA.map((project) => (
          <motion.div
            key={project.id}
            className={`global-project__container ${classes["project-container"]}`}
          >
            <div className={classes["project-content"]}>
              {project.project && (
                <Project
                  image={project.image}
                  text={project.text}
                  github={project.github}
                  player={project.player}
                  href={project.href}
                  onClose={project.onClose}
                />
              )}
              <div className={classes["box-content"]}>
                {project.react}
                {project.node}
                {project.javaScript}
              </div>
              <motion.p
                onMouseDown={project.onShow}
                variants={bouncingAnimation}
                whileHover={"hover"}
              >
                Click for more!
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
