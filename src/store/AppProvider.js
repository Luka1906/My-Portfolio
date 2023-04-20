import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import AppContext from "./app-context";



const AppProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  


  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const closeHandler = () => {
    setShowMenu(false);

  };
  const showHandler = () => {
    setShowMenu(true);

  };


  const isMobile = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    if (isMobile) {
      setShowMenu(false);
    }
  }, [isMobile]);
  
  const appContext = {
    theme: theme,
    toggleTheme: toggleTheme,
    menu: showMenu,
    onClose: closeHandler,
    onShow: showHandler,
  }

  return (
    <AppContext.Provider value={appContext}>
        {props.children}
    </AppContext.Provider>
  )

};

export default AppProvider;
