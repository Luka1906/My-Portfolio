import { useState, Fragment, useContext } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AppContext from "../store/app-context";
import { AnimatePresence, easeInOut } from "framer-motion";
import { motion } from "framer-motion";
const RootLayout = () => {
  let exitAnimationBigScreen = {};
  let  exitAnimationMobile
  let isMobile = window.innerWidth <=768;

  if (!isMobile) {
    exitAnimationBigScreen = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
      exit: {
        x: "-100vw",
        transition: { ease: easeInOut,duration:0.4 },
      },
    };
  } else {
    exitAnimationMobile = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
        exit: {
          y: "100vh",
          transition: { ease: easeInOut, duration:0.4 },
        },
      };
    }
  

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
        {!isMobile && (
          <motion.div
            key={location.pathname}
            variants={exitAnimationBigScreen}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatedOutlet />
          </motion.div>
        )}
        {isMobile && (
          <motion.div
          key={location.pathname}
          variants={exitAnimationMobile}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutlet />
        </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default RootLayout;
