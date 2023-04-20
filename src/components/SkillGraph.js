import {
  faLaptopCode,
  faDatabase,
  faPaintBrush,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../UI/Card";
import classes from "./SkillGraph.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { skillAnimation } from "../animations/animations";

const SkillGraph = () => {
  return (
    <div className={classes.graph}>
      <div className={`${classes.skills} ${classes.skill1}`}>
        <motion.div
        className={classes.card}
        variants={skillAnimation}
          initial={"hidden1"}
          animate={"visible1"}

        >
          <Card className={classes.card1}>
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Vanilla JS</li>
              <li>React JS</li>
            </ul>
          </Card>
        </motion.div>
        <div className={`global-line ${classes.line} ${classes.line1}`}></div>
        <div className={`global-circle ${classes.skillCircles} ${classes.skillCircle1}`}>
          <FontAwesomeIcon
            className={classes["graph-icon"]}
            icon={faLaptopCode}
          />
        </div>
      </div>

      <div className={`${classes.skills} ${classes.skill2}`}>
      <motion.div
            variants={skillAnimation}
            initial={"hidden2"}
            animate={"visible2"}
        >
        <Card className={classes.card2}>
          <h3>Back-End Development</h3>
          <ul>
            <li>Node JS(Express JS)</li>
            <li>Databases (MYSQL and MongoDB)</li>
            <li>Template Engines(EJS)</li>
          </ul>
        </Card>

        </motion.div>
        <div className={`global-line ${classes.line} ${classes.line2}`}></div>
        <div className={`global-circle ${classes.skillCircles} ${classes.skillCircle2}`}>
          {" "}
          <FontAwesomeIcon
            className={classes["graph-icon"]}
            icon={faDatabase}
          />{" "}
        </div>
      </div>

      <div className={`${classes.skills} ${classes.skill3}`}>
      <motion.div
           variants={skillAnimation}
           initial={"hidden3"}
           animate={"visible3"}
        >
        <Card className={classes.card3}>
          <h3>UI/UX Design</h3>
          <ul>
            <li>Material-UI</li>
            <li>Framer Motion</li>
          </ul>
        </Card>
        </motion.div>
        <div className={`global-line ${classes.line} ${classes.line3}`}></div>
        <div className={`global-circle ${classes.skillCircles} ${classes.skillCircle3}`}>
          <FontAwesomeIcon
            className={classes["graph-icon"]}
            icon={faPaintBrush}
          />
        </div>
      </div>

      <div className={`${classes.skills} ${classes.skill14}`}>
      <motion.div
          variants={skillAnimation}
          initial={"hidden4"}
          animate={"visible4"}
        >
        <Card className={classes.card4}>
          <h3>Real-time web applications</h3>
          <ul>
            <li>Socket.IO</li>
          </ul>
        </Card>
        </motion.div>
        <div className={`global-line ${classes.line} ${classes.line4}`}></div>
        <div className={`global-circle ${classes.skillCircles} ${classes.skillCircle4}`}>
          <FontAwesomeIcon
            className={classes["graph-icon"]}
            icon={faArrowRightArrowLeft}
          />
        </div>
        <div className={`global-line ${classes.line} ${classes.line5}`}></div>
      </div>
    </div>
  );
};

export default SkillGraph;
