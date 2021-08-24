import React from "react";

const styles = {
  header: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
  },
  p: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
  },
};

export default function Resume() {
  return (
    <div class="container">
      <h2 style={styles.header}>My Resume</h2>
      <p style={styles.p}>Resume download link will go here</p>
    </div>
  );
}
