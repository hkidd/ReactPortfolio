import React from "react";
import "../assets/css/style.css";
import Jobster from "../assets/images/JobsterHome2.png";
import Pickflix from "../assets/images/LandingPageEx.png";
import NoteTaker from "../assets/images/NoteTakerEx.png";
import Budget from "../assets/images/budget_tracker1.png";
import F1Quiz from "../assets/images/f1quiz.png";
import Weather from "../assets/images/WeatherDashboard.png";


const styles = {
  card: {
    display: 'flex',
    flexWrap: 'wrap',
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
    margin: "0 auto",
    justifyContent: "center",
  },
  a: {
    margin: "3px",
  }
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.header}>My Projects</h2>
      <p style={styles.p}>
        Here are a few of my recent projects that showcase my JavaScript, node.js, express.js and HTML/CSS skills.
      </p>
      <div style={styles.cols} className="row justify-content-around">
        
        <div className="col-sm">
          <div className="card" style={styles.card}>
            <img src={Jobster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jobster</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card" style={styles.card}>
            <img src={Pickflix} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pickflix & Grill</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card" style={styles.card}>
            <img src={NoteTaker} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card" style={styles.card}>
            <img src={Budget} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Budget Tracker</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>


        <div className="col-sm">
          <div className="card" style={styles.card}>
            <img src={F1Quiz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Formula 1 Quiz</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card" style={styles.card}>
            <img src={Weather} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
