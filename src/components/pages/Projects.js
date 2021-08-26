import React from "react";
import "../assets/css/style.css";
import Jobster from "../assets/images/JobsterHome2.png";
import Pickflix from "../assets/images/LandingPageEx.png";
import NoteTaker from "../assets/images/NoteTakerEx.png";
import Budget from "../assets/images/budget_tracker1.png";
import F1Quiz from "../assets/images/f1quiz.png";
import Weather from "../assets/images/WeatherDashboard.png";


const styles = {
  container: {
    alignItems: "stretch",
  },
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
    justifyContent: "center",
  },
  a: {
    margin: "3px",
  }
};

export default function Portfolio() {
  return (
    <div className="container">
      <h2 style={styles.header}>My Projects</h2>
      <p style={styles.p}>
        Here are a few of my recent projects showcasing my JavaScript, node.js, express.js and HTML/CSS skills.
      </p>
      <div style={styles.cols} className="d-flex">
        
        <div className="col-sm">
          <div className="card mx-auto" style={styles.card}>
            <img src={Jobster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Jobster</h5>
              <p className="card-text">
              A one stop shop to keep all job app related materials. 
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={Pickflix} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Pickflix & Grill</h5>
              <p className="card-text">
              A movie and recipe generator that takes in input from the user.
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
          <div className="card mx-auto" style={styles.card}>
            <img src={NoteTaker} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Note Taker</h5>
              <p className="card-text">
              An express.js back end is used to save and retrieve note data from a JSON file.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={Budget} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Budget Tracker</h5>
              <p className="card-text">
              Added functionality to an existing Budget Tracker application that allows for offline access and functionality.
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
          <div className="card mx-auto" style={styles.card}>
            <img src={F1Quiz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Formula 1 Quiz</h5>
              <p className="card-text">
              A timed quiz on random Formula 1 facts that stores the top 3 high scores in local storage.
              </p>
              <a style={styles.a} href="Github" className="btn btn-primary">
                Live Deployment
              </a>
              <a style={styles.a} href="Github" className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>

          <div className="card mx-auto" style={styles.card}>
            <img src={Weather} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" align="center">Weather Dashboard</h5>
              <p className="card-text">
              A weather dashboard that runs in the browser and features dynamically updated HTML and CSS.
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
