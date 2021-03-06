import React from "react";
import "../assets/css/style.css";
import Jobster from "../assets/images/JobsterHome2.png";
import Pickflix from "../assets/images/PickflixAndGrill.png";
import NoteTaker from "../assets/images/NoteTakerEx.png";
import Budget from "../assets/images/budget_tracker1.png";
import F1Quiz from "../assets/images/f1quiz.png";
// import Weather from "../assets/images/WeatherDashboard.png";
import SpudsAndDuds from "../assets/images/MainLandingPage.png";

const styles = {
  container: {
    alignItems: "stretch",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    width: "18rem",
    padding: "10px",
    margin: "10px",
    color: "#090979",
  },
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
  cols: {
    width: "100%",
    justifyContent: "center",
  },
  a: {
    margin: "3px",
  },
};

export default function Portfolio() {
  return (
    <div id="projects" className="container">
      <h2 style={styles.header}>My Projects</h2>
      <p style={styles.p}>
        Here are a few of my recent projects showcasing my JavaScript, node.js,
        express.js and HTML/CSS skills.
      </p>
      <div style={styles.cols} className="d-flex">
        <div className="col-sm">
          <div className="card mx-auto" style={styles.card}>
            <img src={SpudsAndDuds} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Spuds and Duds
              </h5>
              <p className="card-text">
                A Full-Stack (MERN) application that provides users with a
                social movie review community.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://spudsandduds.herokuapp.com"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hkidd/SpudsandDuds-FullStackMERNApp"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={Jobster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Jobster
              </h5>
              <p className="card-text">
                A one stop shop to keep all job app related materials.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://jobster-group-2.herokuapp.com/aboutus"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hkidd/Jobster"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card mx-auto" style={styles.card}>
            <img src={Pickflix} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Pickflix & Grill
              </h5>
              <p className="card-text">
                A movie and recipe generator that takes in input from the user.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://cnvives.github.io/group-3/"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cnvives/group-3"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={NoteTaker} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Note Taker
              </h5>
              <p className="card-text">
                An express.js back end is used to save and retrieve note data
                from a JSON file.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://note-taker-hk.herokuapp.com"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hkidd/NoteTaker"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card mx-auto" style={styles.card}>
            <img src={Budget} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Budget Tracker
              </h5>
              <p className="card-text">
                Added functionality to an existing Budget Tracker application
                that allows for offline access and functionality.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://budget-tracker-hk.herokuapp.com"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hkidd/BudgetTracker"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={F1Quiz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">
                Formula 1 Quiz
              </h5>
              <p className="card-text">
                A timed quiz on random Formula 1 facts that stores the top 3
                high scores in local storage.
              </p>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://hkidd.github.io/CodeQuiz/"
                className="btn btn-primary"
              >
                Live Deployment
              </a>
              <a
                style={styles.a}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hkidd/CodeQuiz"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
