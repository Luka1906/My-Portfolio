import { Link } from "react-router-dom";
import classes from "./Error.module.css";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../UI/Button";
import {useContext } from "react";
import AppContext from "../store/app-context";
const error = "https://res.cloudinary.com/dodlxk4hg/image/upload/v1685866801/Error%20Page%20Image/error_shexjz.jpg"


const ErrorPage = (props) => {

 
  const appContext = useContext(AppContext)
    return (
    <>
      {!appContext.menu && <NavBar />}
      {appContext.menu && <Sidebar  />}
      <main className={`global-error ${classes.error}`}>
        <h1>404 ERROR PAGE</h1>
        <img className={classes["error-img"]} src={error} alt="404 error"></img>
        <h2>OPPS! PAGE NOT FOUND</h2>
        <p>Sorry, the page you're looking for doesn't exist!</p>
        <Button><Link to="/">Go Home</Link></Button>
      </main>
    </>
  );
};

export default ErrorPage;
