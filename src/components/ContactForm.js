import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
import React, { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import useInput from "../hooks/use-input";
import SubmissionMessage from "./SubmissionMessage";

const ContactForm = () => {
  const form = useRef();
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  const [showsubmissionMessage, setShowsubmissionMessage] = useState(false);
  const [closesubmissionMessage, setCloseSubmissionMessage] = useState(false);

  const closeHandler = () => {
    setCloseSubmissionMessage(true);
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const emailHandler = (e) => {
    e.preventDefault();

    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          setShowsubmissionMessage(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const nameInputClasses = nameHasError
    ? `global-invalid ${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

  const emailInputClasses = emailHasError
    ? `global-invalid ${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

  const subjectInputClasses = subjectHasError
    ? `global-invalid ${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;
  const messageInputClasses = messageHasError
    ? `global-invalid ${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

  return (
    <>
      <div className={classes.backdrop}></div>
      {showsubmissionMessage && !closesubmissionMessage && (
        <SubmissionMessage onClose={closeHandler} />
      )}

      <form
        ref={form}
        onSubmit={emailHandler}
        className={`global-form ${classes.form}`}
      >
        <FontAwesomeIcon
          className={`global-user__icon ${classes["user-icon"]}`}
          icon={faUser}
        />

        <div className={classes["form-top__section"]}>
          <div
            className={`${classes["top-left__section"]} ${nameInputClasses}`}
          >
            <input
              className={classes["name-input"]}
              type="text"
              name="user_name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder="Name"
            />
            {nameHasError && (
              <p className={classes["error-message"]}>
                Name must not be empty!
              </p>
            )}
          </div>
          <div
            className={`${classes["top-right__section"]} ${emailInputClasses}`}
          >
            <input
              className={classes["email-input"]}
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailHasError && (
              <p className={classes["error-message"]}>
                Please enter a valid email!
              </p>
            )}
          </div>
        </div>
        <div className={subjectInputClasses}>
          <input
            className={classes["subject-input"]}
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            value={enteredSubject}
          />
          {subjectHasError && (
            <p className={classes["error-message"]}>
              Subject field must not be empty!
            </p>
          )}
        </div>
        <div className={messageInputClasses}>
          <textarea
            name="message"
            placeholder="Message"
            maxLength="500"
            className={classes.textarea}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
          />
          {messageHasError && (
            <p className={classes["error-message"]}>
              Message field must not be empty!
            </p>
          )}
        </div>

        <Button
          disabled={!formIsValid}
          type="submit"
          className={classes.button}
        >
          <FontAwesomeIcon
            className={classes["plane-icon"]}
            icon={faPaperPlane}
          />
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
