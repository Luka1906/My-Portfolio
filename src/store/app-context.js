import React, { createContext } from "react";

const AppContext = React.createContext({
    theme: null,
    toggleTheme: () => {},
    menu: false,
    onClose: () => {},
    onShow: () => {}

   
})

export default AppContext
