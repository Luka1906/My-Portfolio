
import AboutMe from "../components/AboutMe";
import CubeAnimation from "../components/CubeAnimation";
import classes from './About.module.css'
const AboutPage = () => {
  return (
  <div className={classes['about-page']}>
     <AboutMe/>
      <CubeAnimation />
  </div>

       
 
  );
};

export default AboutPage;
