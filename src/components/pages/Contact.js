import React from "react";

const styles = {
  header: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  },
  form: {
    width: '60%',
    margin: '0 auto',
    textAlign: 'center',
  }
}

export default function Contact() {
  return (
    <div class="container">
      <h2 style={styles.header}>Contact Me</h2>
      <form style={styles.form}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name here..."/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Leave a Comment:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </form>
    </div>
  );
}
