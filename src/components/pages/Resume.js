import React from "react";
import '../assets/css/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  header: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  p: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    padding: "10px",
  },
  a: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    padding: "10px",
  }
};

export default function Resume() {
  return (
    <div id="resume" className="container">
      <h2 style={styles.header}>Download My Resume</h2>
      <a style={styles.a}
              href="https://drive.google.com/file/d/11HRkUcW2CaAkTgMJgi-zcqe3E252Ksbm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="fas fa-file-download icon d-flex justify-content-center text-center"
            >
              <FontAwesomeIcon size="4x" className="icon" icon={["fas", "file-download"]} />
              <span style={styles.span}></span>
        </a>
    </div>
  );
}
