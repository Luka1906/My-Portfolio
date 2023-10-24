import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Projects.module.css";

import { motion } from "framer-motion";
import { bouncingAnimation } from "../animations/animations";

import { navBarAnimation } from "../animations/animations";

import { useContext } from "react";
import ProjectContext from "../store/project-context";
import Project from "./Project";
import { AnimatePresence } from "framer-motion";
const image1 = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685869738/My%20Portfolio/project1_rjvygh.png";
const image2 = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1698122116/Screen_Shot_2023-10-23_at_11.33.58_PM_ofbgej.png"
const image3 = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685869744/My%20Portfolio/project2_o5zukf.png";
const image4 =  "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685869863/My%20Portfolio/project3_ffzbd1.png";



const Projects = () => {
  const projectContext = useContext(ProjectContext);

  const PROJECT_DATA = [
    {
      id: Math.floor(Math.random() * 1000),
      image: image1,
      text:
        "Responsive fullstack webshop project with fully functional cart and product filters. Author used Stripe API for checkout, Send Grid API for sending 'forgot password' emails to users and MongoDB for creating and saving user credentials, including JWT authentication tokens.",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Webshop-app.git",
      href1: "https://fascinating-sfogliatella-6516e2.netlify.app/",
      react: (
        <FontAwesomeIcon className={classes["react-icon"]} icon={faReact} />
      ),
      node: (
        <FontAwesomeIcon className={classes["react-node"]} icon={faNodeJs} />
      ),
      onShow: projectContext.project1OnShow,
      onClose: projectContext.project1OnClose,
      project: projectContext.project1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      image: image2,
      text:
        "Responsive fullstack social media app made with Express JS and MongoDB for saving and sending users and posts data to the frontend, deleting and updating posts. Client side of the app was fully made with React and Material UI components while Redux Toolkit is used for saving and sharing backend data across the app. ",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Social-Media-App.git",
      href1: "https://regal-flan-6f8619.netlify.app/",
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
        "Chat app made with Socket.io, EJS and JavaScript on frontend. It enables users to message each other if they chose the same chatroom.",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Chat-simulation.git",
      href1: "https://chat-simulation-production.up.railway.app/",
      node: (
        <FontAwesomeIcon className={classes["react-node"]} icon={faNodeJs} />
      ),
      javaScript: (
        <FontAwesomeIcon className={classes["react-js"]} icon={faJsSquare} />
      ),
      onShow: projectContext.project3OnShow,
      onClose: projectContext.project3OnClose,
      project: projectContext.project3,
    },
   
    {
      id: Math.floor(Math.random() * 1000),
      image: image4,
      text:
        " Simulation of the food app made in React that helps user to choose,save and order the food from the menu. Author used Firebase to saved and retrieve website menu data and users orders",
      github: <FontAwesomeIcon className="github" icon={faGithub} />,
      player: <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />,
      href: "https://github.com/Luka1906/Food-App.git",
      href1: "https://gilded-madeleine-43994b.netlify.app/",
  
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
          <AnimatePresence>
            <div
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
                    href1={project.href1}
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
            </div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default Projects;
