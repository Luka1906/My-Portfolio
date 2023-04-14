import { useState, Fragment, useContext } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AppContext from "../store/app-context";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { exitAnimation } from "../animations/animations";
const RootLayout = () => {
  const appContext = useContext(AppContext);
  const location = useLocation();
  const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
    return <>{outlet}</>;
  };

  return (
    <Fragment>
      {appContext.menu ? <Sidebar /> : <NavBar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={exitAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default RootLayout;
