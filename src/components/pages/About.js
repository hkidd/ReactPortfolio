import React from "react";
import Headshot from "../assets/images/IMG_0527.jpeg";
import '../assets/css/style.css';

const styles = {
  profileImage: {
    display: "flex",
    margin: "auto",
    maxWidth: "35%",
    height: "auto",
    borderRadius: "20px",
  },
  header: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  p: {
    width: "35%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
};

export default function About() {
  return (
    <div className="container">
      <h2 style={styles.header}>About Me</h2>
      <img
        src={Headshot}
        style={styles.profileImage}
        alt="My headshot"
        className="profile-image"
        id="headshot"
      ></img>
      <p style={styles.p}>
        Hi there! My name is Harrison Kidd and I am a Full-Stack Javascript Developer. Check out some of the cool things that I've been working on!
      </p>
    </div>
  );
}
