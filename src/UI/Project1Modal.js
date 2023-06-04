import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./ProjectModal.css"
import { motion } from "framer-motion";
import { projectModalAnimation } from "../animations/animations";

const Backdrop = (props) => {
  return (
    <div className="project-backdrop" onClick={props.onClose}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <motion.div
      variants={projectModalAnimation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="project-modal"
    >
     {props.children}
    </motion.div>
  );
};
const portalElement = document.getElementById(`overlays`);

const Project1Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Project1Modal;
