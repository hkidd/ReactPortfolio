import React, { useState } from "react";
import '../assets/css/style.css';

const styles = {
  header: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  form: {
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
  },
};

// Validate email?
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export default function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setname(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!comment) {
      setErrorMessage(
        `Comment text empty`
      );
      return;
    }
    alert(`Thanks ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setname('');
    setComment('');
    setEmail('');
  };

  return (
    <div className="container">
      <h2 style={styles.header}>Contact Me</h2>
      <form style={styles.form}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name:
          </label>
          <br></br>
          <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          id="nameInput"
          placeholder="Enter name here..."
        />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email: 
          </label>
          <br></br>
          <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          id="emailInput"
          placeholder="me@email.com"
        />
        </div>
        <div className="mb-3">
          <label htmlFor="commentInput" className="form-label">
            Leave a Comment:
          </label>
          <textarea
            className="form-control"
            id="commentInput"
            rows="3"
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="text"
            placeholder="Please leave a comment!"
          ></textarea>
        </div>
        <button id="submitBtn" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
