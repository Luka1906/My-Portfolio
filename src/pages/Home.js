import { animationOne, transition } from "../animations/animations";
import MainPage from "../components/Main";
import {motion} from 'framer-motion'

const HomePage = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
   
      
        >
        <MainPage/>
        </motion.div>
    )
}

export default HomePage