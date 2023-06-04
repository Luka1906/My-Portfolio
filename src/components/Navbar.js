import { useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CustomizedSwitches from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import AppContext from "../store/app-context";
import { AnimatePresence, motion } from "framer-motion";
import { linksHoverAnimation } from "../animations/animations";

const NavBar = () => {
  const appContext = useContext(AppContext);

  return (
    <motion.div className={classes.header}>
      <Logo />
      <nav>
        <ul
          className={`${classes["nav-bar"]} ${appContext.menu &&
            classes.visible}`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
          >
            {" "}
            <motion.li variants={linksHoverAnimation} whileHover={"linkHover"}>
              Home
            </motion.li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="about"
          >
            {" "}
            <motion.li variants={linksHoverAnimation} whileHover={"linkHover"}>
              About
            </motion.li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="skills"
          >
            {" "}
            <motion.li variants={linksHoverAnimation} whileHover={"linkHover"}>
              Skills
            </motion.li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="work"
          >
            {" "}
            <motion.li variants={linksHoverAnimation} whileHover={"linkHover"}>
              Work
            </motion.li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="contact"
          >
            {" "}
            <motion.li variants={linksHoverAnimation} whileHover={"linkHover"}>
              Contact
            </motion.li>
          </NavLink>
        </ul>

        <span className={classes.switch}>
          <CustomizedSwitches />
        </span>
        {!appContext.menu && (
          <FontAwesomeIcon
            onClick={appContext.onShow}
            className={classes.bars}
            icon={faBars}
          />
        )}
      </nav>
    </motion.div>
  );
};

export default NavBar;
