import { Fragment, useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CustomizedSwitches from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import AppContext from "../store/app-context";
import {motion} from 'framer-motion'

const NavBar = () => {
  const appContext = useContext(AppContext);

  return (
    <Fragment>
      <motion.div initial={{y:-250}} animate={{y: 0}} transition={{type: "spring" ,stiffness:120}} className={classes.header}>
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
              <motion.li whileHover={{originX: 0, scale:1.2}} transition={{type:"spring", stiffness:350}}>Home</motion.li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="about"
            >
              {" "}
              <motion.li whileHover={{originX: 0, scale:1.2}} transition={{type:"spring", stiffness:350}}>About</motion.li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="skills"
            >
              {" "}
              <motion.li whileHover={{originX: 0, scale:1.2}} transition={{type:"spring", stiffness:350}}>Skills</motion.li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="work"
            >
              {" "}
              <motion.li whileHover={{originX: 0, scale:1.2}} transition={{type:"spring", stiffness:350}}>Work</motion.li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="contact"
            >
              {" "}
              <motion.li whileHover={{originX: 0, scale:1.2}} transition={{type:"spring", stiffness:350}}>Contact</motion.li>
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
    </Fragment>
  );
};

export default NavBar;
