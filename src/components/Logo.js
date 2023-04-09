import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.logo}>
        <span className={classes["logo-letter"]}>M</span>
        <span className={classes["logo-name"]}>y Portfolio</span>
      </div>
    )
   
}

export default Logo