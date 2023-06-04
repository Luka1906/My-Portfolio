import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { popUpMenuToggle } from "../animations/animations";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <motion.div
      variants={popUpMenuToggle}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className={classes.modal}
    >
      <div>{props.children}</div>
    </motion.div>
  );
};
const portalElement = document.getElementById(`overlays`);

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
       <AnimatePresence> <ModalOverlay>{props.children}</ModalOverlay></AnimatePresence>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
