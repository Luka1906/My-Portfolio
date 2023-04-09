import { Fragment, useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CustomizedSwitches from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import AppContext from "../store/app-context";

const NavBar = () => {
  const appContext = useContext(AppContext);

  return (
    <Fragment>
      <div className={classes.header}>
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
              <li>Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="about"
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="skills"
            >
              {" "}
              <li>Skills</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="work"
            >
              {" "}
              <li>Work</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="contact"
            >
              {" "}
              <li>Contact</li>
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
      </div>
    </Fragment>
  );
};

export default NavBar;
