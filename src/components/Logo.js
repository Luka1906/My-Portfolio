import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className={classes.logo}>
       <Link to=""><span className={classes["logo-letter"]}>M</span></Link> 
        <span className={classes["logo-name"]}>y Portfolio</span>
      </div>
    )
   
}

export default Logo