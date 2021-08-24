import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  span: {
    height: "1px",
    width: "1px",
    position: "absolute",
    overflow: "hidden",
    top: "-10px",
  },
  footer: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    listStyleType: "none",
    margin: "0 auto",
    justifyContent: "center",
  },
  li: {
    padding: "20px",
  },
};

export default function Footer() {
  return (
    <div class="container">
      <footer style={styles.footer}>
        <h5 class="follow-me">Follow Me</h5>

        {/* Font Awesome Icons */}

        <ul style={styles.list}>
          <li style={styles.li}>
            <a
              href="https://github.com/hkidd"
              target="_blank"
              rel="noreferrer"
              class="fa fa-github icon"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
              <span style={styles.span}>My LinkedIn</span>
            </a>
          </li>
          <li style={styles.li}>
            <a
              href="https://www.linkedin.com/in/harrison-kidd/"
              target="_blank"
              rel="noreferrer"
              class="fa fa-linkedin icon"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <span style={styles.span}>My LinkedIn</span>
            </a>
          </li>
          <li style={styles.li}>
            <a
              href="https://twitter.com/HarrisonKidd8"
              target="_blank"
              rel="noreferrer"
              class="fa fa-twitter icon"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              <span style={styles.span}>My Twitter</span>
            </a>
          </li>
          <li style={styles.li}>
            <a
              href="https://www.instagram.com/harrisonkidd/"
              target="_blank"
              rel="noreferrer"
              class="fa fa-instagram icon"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <span style={styles.span}>My Instagram</span>
            </a>
          </li>
        </ul>

        <h5>by Harrison Kidd 2021</h5>
        
      </footer>
    </div>
  );
}
