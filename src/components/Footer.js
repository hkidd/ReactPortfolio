import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  span: {
    height: "1px",
    width: "1px",
    position: "absolute",
    overflow: "hidden",
    top: "-10px",
  },
};

export default function Footer() {
  return (
    <div class="container">
      <footer>
      <h5 class="follow-me">Follow Me</h5>
      <ul>
      <li>
          <a
            href="https://github.com/hkidd"
            target="_blank"
            rel="noreferrer"
            class="fa fa-github icon"
          ><FontAwesomeIcon icon={['fab', 'github']} />
            <span style={styles.span}>My LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/harrison-kidd/"
            target="_blank"
            rel="noreferrer"
            class="fa fa-linkedin icon"
          ><FontAwesomeIcon icon={['fab', 'linkedin']} />
            <span style={styles.span}>My LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/HarrisonKidd8"
            target="_blank"
            rel="noreferrer"
            class="fa fa-twitter icon"
          ><FontAwesomeIcon icon={['fab', 'twitter']} />
            <span style={styles.span}>My Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/harrisonkidd/"
            target="_blank"
            rel="noreferrer"
            class="fa fa-instagram icon"
          ><FontAwesomeIcon icon={['fab', 'instagram']} />
            <span style={styles.span}>My Instagram</span>
          </a>
        </li>
      </ul>
        <h5>by Harrison Kidd 2021</h5>
      </footer>
    </div>
  );
};
