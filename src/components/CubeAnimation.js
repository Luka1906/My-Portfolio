import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./CubeAnimation.module.css";

const CubeAnimation = () => {
  return (
    <div className={classes.cube}>
      <div className={classes.cubespinner}>
        <div className={classes.icon1}>
          <FontAwesomeIcon color="#5ED4F4" icon={faReact} />
        </div>
        <div className={classes.icon2}>
          <FontAwesomeIcon color="#EFD81D" icon={faJsSquare} />
        </div>
        <div className={classes.icon3}>
          <FontAwesomeIcon color="#F06529" icon={faHtml5} />
        </div>
        <div className={classes.icon4}>
          <FontAwesomeIcon color="#28A4D9" icon={faCss3} />
        </div>
        <div className={classes.icon5}>
          <FontAwesomeIcon color="#6cc24a" icon={faNodeJs} />
        </div>
        <div className={classes.icon6}>
          <FontAwesomeIcon color="#EC4D28" icon={faGitAlt} />
        </div>
      </div>
    </div>
  );
};

export default CubeAnimation;
