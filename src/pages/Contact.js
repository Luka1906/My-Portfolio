import { Fragment } from 'react'
import classes from './Contact.module.css'
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Map from '../components/GoogleMap';


const ContactPage = () => {
    return (
        <div className={classes['contact-wrapper']}>
        <div className={classes['contact-page']}>
        <div className={classes.contact}>
            <h1>Contact me</h1>
            <h3>Let's talk! <span><FontAwesomeIcon icon={faCommentDots} /></span></h3>
            <p>Please email me if you have any question and would like to connect or call me on <span className={classes.number}>331/308-4904.</span> </p>
        </div>
        <ContactForm/>
        </div>
          <Map/>
          </div>
    )
   
}

export default ContactPage