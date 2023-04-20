import React, { createContext } from "react";

const AppContext = React.createContext({
    theme: null,
    toggleTheme: () => {},
    menu: false,
  


   
})

export default AppContext
