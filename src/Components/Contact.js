import "./Contact.css";
import React, { useState } from "react";

function Contact() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageSubject, setEnteredMessageSubject] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };
  const messageSubjectChangeHandler = (event) => {
    setEnteredMessageSubject(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newContact = {
      name: enteredName,
      email: enteredEmail,
      messageSubject: enteredMessageSubject,
      message: enteredMessage,
    };
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessageSubject("");
    setEnteredMessage("");
    setEnteredPhone("");
  };

  return (
    <div className="contact">
      <h1>You can reach out to me here!</h1>
      <form>
        <div className="contact-controls">
          <div className="fields">
            <label>Name</label>
            <input
              type="text"              
              onChange={nameChangeHandler}
              value={enteredName}
            />
          </div>
          <div className="fields">
            <label>E-mail</label>
            <input
              type="text"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>
          <div className="fields">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="### ### ####"
              onChange={phoneChangeHandler}
              value={enteredPhone}
            />
            </div>
            <div className="fields">
              <label>Message Subject</label>
              <input
                type="text"
                onChange={messageSubjectChangeHandler}
                value={enteredMessageSubject}
              />
              </div>
              <div className="fields">
                <label>Message</label>
                <textarea className="messagefield"
                  type="text"
                  onChange={messageChangeHandler}
                  value={enteredMessage}
                  
                />
              </div>
                
        </div>
        <div className="submit-button">
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
