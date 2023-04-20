import { Fragment } from 'react'
import classes from './Contact.module.css'
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Map from '../components/GoogleMap';
import {motion} from 'framer-motion';
import { formAnimation } from '../animations/animations';


const ContactPage = () => {
    return (
        <div className={classes['contact-wrapper']}>
        <motion.div
        variants={formAnimation}
        initial={"hidden"}
        animate={"visible"}
        
        className={classes['contact-page']}>
        <div className={`global-contact ${classes.contact}`}>
            <h1>Contact me</h1>
            <h3>Let's talk! <span><FontAwesomeIcon icon={faCommentDots} /></span></h3>
            <p>Please email me if you have any question regarding portfolio or you would like to connect </p>
        </div>
        <ContactForm/>
        </motion.div>
          <Map/>
          </div>
    )
   
}

export default ContactPage