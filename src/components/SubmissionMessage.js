import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import classes from "./SubmissionMessage.module.css";
import { motion } from "framer-motion";
import {
  submissionBackdropAnimation,
  submissionModalAnimation,
} from "../animations/animations";


const SubmissionMessage = ({onClose}) => {

  return (
    <>
      <motion.div
        variants={submissionBackdropAnimation}
        initial={"hidden"}
        animate={"visible"}
        className={classes.backdrop}
        onClick={onClose}
      ></motion.div>
      <motion.div
        className={classes["submission-card"]}
        variants={submissionModalAnimation}
        initial={"hidden"}
        animate={"visible"}
      >
        <Card className="global-card2">
          <div className={`${classes.message}`}>
            <div className={classes["submission-check"]}>
              <FontAwesomeIcon className={classes.check} icon={faCheck} />
            </div>
            <div className={classes["submission-close"]}>
              <FontAwesomeIcon onClick={onClose} className={classes["close-window"]} icon={faX} />
            </div>
            <div className={classes["submission-msg"]}>
              <h4>MESSAGE DELIVERED!</h4>
              <p>Your message was sent successfully</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

export default SubmissionMessage;
