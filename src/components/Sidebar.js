import classes from "./Sidebar.module.css";
import Modal from "../UI/Modal";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import AppContext from "../store/app-context";
import {
  faHouse,
  faAddressCard,
  faLightbulb,
  faBriefcase,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

const Sidebar = () => {
  const appContext = useContext(AppContext);

  return (
      <Modal onClose={appContext.onClose}>
        <div className={classes["menu-header"]}>
          <Logo />
          <FontAwesomeIcon
            className={classes["x-icon"]}
            icon={faX}
            onClick={appContext.onClose}
          />
        </div>

        <nav onClick={appContext.onClose} className={classes["side-bar"]}>
          <ul className={`${classes["nav-bar"]}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/"
            >
              {" "}
              <div className={classes.home}>
                <li>Home</li>

                <FontAwesomeIcon icon={faHouse} />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="about"
            >
              {" "}
              <div className={classes.about}>
                <li>About</li>

                <FontAwesomeIcon icon={faAddressCard} />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="skills"
            >
              {" "}
              <div className={classes.skills}>
                <li>Skills</li>

                <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="work"
            >
              {" "}
              <div className={classes.work}>
                <li>Work</li>

                <FontAwesomeIcon icon={faBriefcase} />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="contact"
            >
              {" "}
              <div className={classes.contact}>
                <li>Contact</li>

                <FontAwesomeIcon icon={faPhone} />
              </div>
            </NavLink>
          </ul>
        </nav>
      </Modal>
  );
};

export default Sidebar;
