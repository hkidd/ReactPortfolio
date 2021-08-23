import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  span: {
    height: "1px",
    width: "1px",
    position: "absolute",
    overflow: "hidden",
    top: "-10px",
  },
};

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name here..."/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <h2 class="follow-me">Follow Me</h2>
      <ul>
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
    </div>
  );
}
