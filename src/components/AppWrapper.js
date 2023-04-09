import { useContext } from "react";
import AppContext from "../store/app-context";

const AppWrapper = (props) => {
  const appContext = useContext(AppContext);
  return(
    <div className="app" id={appContext.theme}>{props.children}</div>
  )
 
};

export default AppWrapper;
