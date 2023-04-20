import classes from "./Logo.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import AppContext from "../store/app-context";

const Logo = () => {
  const appContext = useContext(AppContext);

  let svgAnimation = {};
  let svgPathAnimation = {};

  if (!appContext.menu) {
    svgAnimation = {
      initial: {
        rotate: -180,
      },
      animate: {
        rotate: 0,
        transition: {
          duration: 0.8,
        },
      },
    };

    svgPathAnimation = {
      hidden: {
        opacity: 0,
        pathLength: 0,
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 3.5,
          ease: "easeInOut",
        },
      },
    };
  }

  return (
    <div className={`global-logo ${classes.logo}`}>
      <Link to="">
        <div className={`global-m__letter ${classes.m}`}>
          <motion.svg
            width="60"
            zoomAndPan="magnify"
            viewBox="11 8 15 15"
            height="60"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            variants={svgAnimation}
            initial={"initial"}
            animate={"animate"}
          >
            <defs>
              <motion.path
                d="M 11.8125 9.910156 L 25.3125 9.910156 L 25.3125 23.410156 L 11.8125 23.410156 Z M 11.8125 9.910156 "
                variants={svgPathAnimation}
                initial={"hidden"}
                animate={"visible"}
              />
            </defs>
            <g>
              <motion.path
                fill="#8b008b"
                d="M 25.027344 18.9375 C 24.886719 18.9375 24.773438 18.824219 24.773438 18.679688 L 24.773438 10.8125 L 20.429688 15.167969 C 20.328125 15.265625 20.167969 15.265625 20.066406 15.167969 C 19.964844 15.066406 19.964844 14.902344 20.066406 14.804688 L 24.847656 10.011719 C 24.921875 9.9375 25.03125 9.914062 25.125 9.957031 C 25.222656 9.996094 25.285156 10.089844 25.285156 10.191406 L 25.285156 18.679688 C 25.285156 18.824219 25.167969 18.9375 25.027344 18.9375 Z M 12.097656 23.410156 C 11.957031 23.410156 11.84375 23.296875 11.84375 23.152344 L 11.84375 14.210938 C 11.84375 14.105469 11.90625 14.011719 12 13.972656 C 12.097656 13.933594 12.207031 13.953125 12.28125 14.027344 L 16.742188 18.5 C 16.839844 18.601562 16.839844 18.761719 16.742188 18.863281 C 16.640625 18.964844 16.480469 18.964844 16.378906 18.863281 L 12.355469 14.828125 L 12.355469 23.152344 C 12.355469 23.296875 12.242188 23.410156 12.097656 23.410156 Z M 25.027344 23.410156 C 24.960938 23.410156 24.898438 23.386719 24.847656 23.335938 L 11.917969 10.375 C 11.820312 10.273438 11.820312 10.109375 11.917969 10.011719 C 12.019531 9.910156 12.179688 9.910156 12.28125 10.011719 L 25.207031 22.972656 C 25.308594 23.074219 25.308594 23.234375 25.207031 23.335938 C 25.160156 23.386719 25.09375 23.410156 25.027344 23.410156 "
                variants={svgPathAnimation}
                initial={"hidden"}
                animate={"visible"}
              />
            </g>
          </motion.svg>
        </div>
      </Link>
      <div className={classes["logo-name"]}>y Portfolio</div>
    </div>
  );
};

export default Logo;
