import { Fragment} from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CustomizedSwitches from "./Switch";




const NavBar = () => {
    return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <span className={classes['logo-letter']}>M</span>
          <span className={classes['logo-name']}>y Portfolio</span>

        </div>
        <nav>
          <ul className={classes["nav-bar"]}>
            <NavLink> <li>Home</li></NavLink>
            <NavLink> <li>About</li></NavLink>
            <NavLink> <li>Skills</li></NavLink>
            <NavLink> <li>Work</li></NavLink>
            <NavLink> <li>Contact</li></NavLink>
            <li className={classes.switch}><CustomizedSwitches/></li>
          </ul>
        
        </nav>
      </div>
    </Fragment>
  );
};

export default NavBar;
