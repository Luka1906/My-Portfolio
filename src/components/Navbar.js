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
            <NavLink className={({isActive})=> isActive ? classes.active : undefined } to="/"> <li>Home</li></NavLink>
            <NavLink className={({isActive})=> isActive ? classes.active : undefined } to="about"> <li>About</li></NavLink>
            <NavLink className={({isActive})=> isActive ? classes.active : undefined } to="skills" > <li>Skills</li></NavLink>
            <NavLink className={({isActive})=> isActive ? classes.active : undefined } to="work" > <li>Work</li></NavLink>
            <NavLink className={({isActive})=> isActive ? classes.active : undefined }  to="contact"> <li>Contact</li></NavLink>
            <li className={classes.switch}><CustomizedSwitches/></li>
          </ul>
        
        </nav>
      </div>
    </Fragment>
  );
};

export default NavBar;
