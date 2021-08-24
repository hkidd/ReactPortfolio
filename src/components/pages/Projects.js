import React from "react";
import Jobster from "../assets/images/JobsterHome2.png";
import Pickflix from "../assets/images/LandingPageEx.png";
import NoteTaker from "../assets/images/NoteTakerEx.png";

const styles = {
  card: {
    width: "18rem",
    padding: '10px',
    margin: '10px',
  },
  projectPage: {
    display: "flex",
  },
  header: {
    width: '75%',
    margin: '0 auto',
    textAlign: 'center',
  },
  p: {
    width: '60%',
    margin: '0 auto',
    textAlign: 'center',
  },
  cols: {
    width: '75%',
    margin: '0 auto',
    justifyContent: 'center',
  }
};

export default function Portfolio() {
  return (
    <div class="container">
      <h2 style={styles.header}>My Projects</h2>
      <p style={styles.p}>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor.
      </p>
      <div style={styles.cols} class="row justify-content-around">
        <div class="col-4">
          <div class="card" style={styles.card}>
            <img src={Jobster} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Jobster</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
          <div class="card" style={styles.card}>
            <img src={Pickflix} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pickflix & Grill</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
          <div class="card" style={styles.card}>
            <img src={NoteTaker} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">NoteTaker</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style={styles.card}>
            <img src={Jobster} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Jobster</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
          <div class="card" style={styles.card}>
            <img src={Pickflix} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pickflix & Grill</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
          <div class="card" style={styles.card}>
            <img src={NoteTaker} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">NoteTaker</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="Github" class="btn btn-primary">
                Live Deployment
              </a>
              <a href="Github" class="btn btn-primary">
                GitHub 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
