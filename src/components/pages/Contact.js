import React from "react";

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

export default function Contact() {
  return (
    <div className="container">
      <h2 style={styles.header}>Contact Me</h2>
      <form style={styles.form}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name here..."
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Leave a Comment:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
