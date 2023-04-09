import { useState,useEffect, useContext} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "@mui/material";
import AppContext from "../store/app-context";
const RootLayout = () => {
  // const [showMenu, showMenuHandler] = useState(false);

  // const closeHandler = () => {
  //   showMenuHandler(false);
  // };
  // const showHandler = () => {
  //   showMenuHandler(true);
  // };
  
  // const isMobile = useMediaQuery('(min-width:768px)');

  // useEffect (()=> {
  //   if (isMobile) {
  //     showMenuHandler(false)
  //   }
  // },[isMobile])
 
 const appContext = useContext(AppContext)


  return (
   
    <>
      {!appContext.menu && <NavBar  />}
      {appContext.menu&& <Sidebar />}
      <Outlet />
    </>
  );
};

export default RootLayout;
