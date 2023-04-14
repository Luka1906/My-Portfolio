import { useContext, useEffect } from "react";
import AppContext from "../store/app-context";

const AppWrapper = (props) => {
  const appContext = useContext(AppContext)
  if(appContext.theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }

  return(
    <div className={`app ${appContext.theme}`} >{props.children}</div>
  )
 
};

export default AppWrapper;
