import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ContactForm = () => {
  return (

    <form className={classes.form}>
        <FontAwesomeIcon className={classes['user-icon']} icon={faUser} />
        
      <div className={classes["form-top__section"]}>
        <input
          className={classes["name-input"]}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={classes["email-input"]}
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message" maxLength="500"></textarea>
      <Button className={classes.button}><FontAwesomeIcon className={classes['plane-icon']} icon={faPaperPlane} /></Button>
    </form>


  );
};

export default ContactForm;
